import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/fruitProduct.module.css"
import axios from "axios";
import { addProduct } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

const FruitProduct = ({fruit}) => {

  const [size,SetSize] = useState(0);
  const [price,SetPrice] = useState(fruit.prices[0]);
  const [quantity,SetQuantity]=useState(1);
  const extras = fruit.extraOptions;
  const dispatch = useDispatch();


  const handleSize = (sizeIndex) =>{
    const difference = fruit.prices[sizeIndex]- fruit.prices[size];
    SetSize(sizeIndex);
    changePrice(difference);
  }

  const changePrice = (number)=>{
    SetPrice(price+number);
  }

  const handleClick = ()=>{
    dispatch(addProduct({...fruit,price,quantity,extras}))
  }

  return (
    <div className={styles.container} >
      <div className={styles.trioFruit}>
        <Image src="/img/TrioFruit.png" alt="" width={250} height={250}/> 
      </div>
      <div className={styles.trioFruit2}>
        <Image src="/img/TrioFruit.png" alt="" width={250} height={250}/> 
      </div>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <div className={styles.fruitImg}>
            <Image src={fruit.img} layout="fill" alt="" objectFit="contain"/>
            </div>
          </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{fruit.title}</h1>
            <span className={styles.price}>${fruit.prices[size]}</span>
            <p className={styles.desc}>{fruit.desc}</p>
            <h3 className={styles.choose}>Choose the size of your order</h3>
            <div className={styles.sizes}>
              <div className={styles.size} onClick={()=>handleSize(0)}>
                <Image src="/img/bag.png" layout="fill" objectFit="contain"/>
                <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={()=>handleSize(1)}>
                <Image src="/img/bag.png" layout="fill" objectFit="contain"/>
                <span className={styles.number}>Medium</span>
              </div>
              <div className={styles.size} onClick={()=>handleSize(2)}>
                <Image src="/img/bag.png" layout="fill" objectFit="contain"/>
                <span className={styles.number}>Large</span>
              </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
              {fruit.extraOptions.map(option=>(
                <div className={styles.option} key={option._id}>
                <label htmlFor={option.text}>
                  {option.text}</label>
              </div>
                ))}
            </div>
            <div className={styles.add}>
              <input onChange={(e)=>SetQuantity(e.target.value)} type="number" defaultValue={1} min={0} className={styles.quantity} />
              <button className={styles.button}  onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    </div>
  );
};



export const getServerSideProps = async ({params}) =>{
  const res = await axios.get(`http://localhost:3000/api/fruitProducts/${params.id}`);
  return{
    props:{
      fruit:res.data,
    },
  };
};

export default FruitProduct;
