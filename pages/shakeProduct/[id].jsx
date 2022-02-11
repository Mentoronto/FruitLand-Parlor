import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/shakeProduct.module.css"
import axios from "axios";
import { addProduct } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

const ShakeProduct = ({shake}) => {
 
  const [size,SetSize] = useState(0);
  const [price,SetPrice]= useState(shake.prices[0]);
  const [extras,SetExtras]=useState([]);
  const [quantity,SetQuantity]=useState(1);
  const dispatch = useDispatch();

  const handleSize = (sizeIndex) =>{
    const difference = shake.prices[sizeIndex]-shake.prices[size];
    SetSize(sizeIndex);
    changePrice(difference); 
  }

  const changePrice =(number)=>{
    SetPrice(price+number);
  }


  const handleChange = (e,option)=>{
    const checked = e.target.checked;

    if(checked){
      changePrice(option.price);
      SetExtras((prev)=>[...prev,option])
    }else{
      changePrice(-option.price);
      SetExtras(extras.filter(extra=>extra._id!== option._id));
    }
  };

  const handleClick = ()=>{
    dispatch(addProduct({...shake,price,quantity,extras}))
  }

  return(
    <div className={styles.container} style={{background:shake.bg}}>
       <div className={styles.trioFruit}>
      <Image src="/img/TrioFruit.png" alt="" width={250} height={250}/> 
    </div>
    <div className={styles.trioFruit2}>
      <Image src="/img/TrioFruit.png" alt="" width={250} height={250}/> 
    </div>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <div className={styles.shakeImg}>
            <Image src={shake.img} layout="fill" alt="" objectFit="contain"/>
            </div>
          </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{shake.title}</h1>
            <span className={styles.price}>${price}</span>
            <p className={styles.desc}>{shake.desc}</p>
            <h3 className={styles.choose}>Choose the size of your shake</h3>
            <div className={styles.sizes}>
              <div className={styles.size} onClick={()=>handleSize(0)}>
                <Image src="/img/shake.png" className={styles.sizeImg} layout="fill" objectFit="contain"  />
                <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={()=>handleSize(1)}>
                <Image src="/img/shake.png" className={styles.sizeImg} layout="fill" objectFit="contain"/>
                <span className={styles.number}>Medium</span>
              </div>
              <div className={styles.size} onClick={()=>handleSize(2)}>
                <Image src="/img/shake.png" className={styles.sizeImg} layout="fill" objectFit="contain" />
                <span className={styles.number}>Large</span>
              </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
              {shake.extraOptions.map(option=>(
                <div className={styles.option} key={option._id}>
                <input
                 type="checkbox" 
                 id={option.text}
                 name={option.text}
                 className={styles.checkbox}
                 onChange={(e)=>handleChange(e,option)}
                 />
                <label htmlFor={option.text}>
                  {option.text}</label>
              </div>
                ))}
            </div>
            <div className={styles.add}>
              <input 
                onChange={(e)=>SetQuantity(e.target.value)}
                type="number" 
                defaultValue={1} min={0} 
                className={styles.quantity} 
              />
              <button className={styles.button} onClick={handleClick}>
                Add to Cart
              </button>
            </div>
        </div>
      </div>
  );
};


export const getServerSideProps = async ({params}) =>{
  const res = await axios.get(`http://localhost:3000/api/shakeProducts/${params.id}`); 
  return{
    props:{
      shake:res.data,
    },
  };
};

export default ShakeProduct;
