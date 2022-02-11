import { useState } from "react";
import styles from "../styles/OrderDetails.module.css"

const OrderDetails = ({total, createOrder}) => {
  const [customer,setCustomer] = useState("");
  const [address,setAddress] = useState("");

  const handleClick = () =>{
    createOrder({ customer,address,total,method:0 });
  }
  return (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}> Pay ${total} after deliver</h1>
      <div className={styles.item}>
        <label className={styles.label}>Name Surname</label>
        <input type="text" placeholder="John Doe" className={styles.input} onChange={(e)=>setCustomer(e.target.value)}/>
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Phone Number</label>
        <input type="text" placeholder="111-111-1111" className={styles.input} />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Address</label>
        <textarea type="text" placeholder="123 YellowBourne Rd"  className={styles.textarea} onChange={(e)=>setAddress(e.target.value)}/>
    </div>
    <button onClick={handleClick} className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default OrderDetails;
