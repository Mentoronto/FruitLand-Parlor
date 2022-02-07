import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css"

const index = ({orders, fruitProducts,shakeProducts}) => {
  const [fruitList,setFruitList]=useState(fruitProducts);
  const [shakeList,setShakeList]=useState(shakeProducts);
  const [orderList,setOrderList]=useState(orders);
  const status=["Preparing","On the Way", "Delivered"];

  const handleFruitDelete = async (id)=>{
      try{
          const res = await axios.delete("http://localhost:3000/api/fruitProducts/"+id);
          setFruitList(fruitList.filter(fruit=>fruit._id !== id));
      }catch(err){
        console.log('err :>> ', err);
      }
  }
  const handleShakeDelete = async (id)=>{
    try{
        const res = await axios.delete("http://localhost:3000/api/shakeProducts/"+id);
        setShakeList(shakeList.filter(shake=>shake._id !== id));
    }catch(err){
      console.log('err :>> ', err);
    }
  }

  const handleStatus = async (id) =>{
    
    const item = orderList.filter(order=>order._id ===id)[0];
    const currentStatus = item.status;
   
    try{
      const res = await axios.put("http://localhost:3000/api/orders/"+id,{status:currentStatus+1});
      setOrderList([
        res.data,
        ...orderList.filter(order=>order._id !== id),
      ]);
    }catch(err){
      console.log('err :>> ', err);
    }
  }
  return (
  <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Fruit Products</h1>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
              <th>Image</th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
          </tr>
        </tbody>
          {fruitList.map(fruit=>(
        <tbody key={fruit._id}>
            <tr className={styles.trTitle}>
              <td> 
                <Image
              src={fruit.img}
              width={50}
              height={50}
              objectFit="cover"
              alt=""
              /></td>
              <td>{fruit._id.slice(0,5)}...</td>
              <td>{fruit.title}</td>
              <td>${fruit.prices[0]}</td>
              <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button} onClick={()=>handleFruitDelete(fruit._id)}>Delete</button>
              </td>
          </tr>
        </tbody>
          ))}
      </table>
    </div>
    <div className={styles.item}>
      <h1 className={styles.title}>ShakeProducts</h1>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
              <th>Image</th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
          </tr>
        </tbody>
        {shakeList.map(shake=>(
          <tbody key={shake._id}>
          <tr className={styles.trTitle}>
              <td> 
                <Image
              src={shake.img}
              width={50}
              height={50}
              objectFit="cover"
              alt=""
              /></td>
              <td>{shake._id.slice(0,5)}...</td>
              <td>{shake.title}</td>
              <td>${shake.prices[0]}</td>
              <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button} onClick={()=>handleShakeDelete(shake._id)}>Delete</button>
              </td>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
    <div className={styles.item}>
    <h1 className={styles.title}>Orders</h1>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment method</th>
              <th>Status</th>
              <th>Action</th>
          </tr>
        </tbody>
    {orderList.map(order=>(
        <tbody>
          <tr className={styles.trTitle}>
              <td> {order._id.slice(0,5)}...</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>{order.method === 0 ? ("Cash") : ("Paid") }</td>
              <td>{status[order.status]}</td>
              <td>
                <button className={styles.nextButton} onClick={()=>handleStatus(order._id)}>Next Stage</button>
              </td>
          </tr>
        </tbody>
      ))}
      </table>
    </div>
  </div>
  );
};

export const getServerSideProps = async () =>{
  const fruitProductRes = await axios.get("http://localhost:3000/api/fruitProducts");
  const shakeProductRes = await axios.get("http://localhost:3000/api/shakeProducts");
  const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props:{
      orders:orderRes.data,
      fruitProducts:fruitProductRes.data,
      shakeProducts:shakeProductRes.data,
    }
  };
};

export default index;
