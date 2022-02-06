import styles from "../styles/Footer.module.css"
import Image from "next/image";

const Footer = () => {
  return ( 
  <div className={styles.container}>
    <div className={styles.item}>
      <Image src="/img/logo.png" alt="" width={110} height={110}/>
    </div>
    <div className={styles.item}>
       <div className={styles.card}>
         <h3 className={styles.slogan}>
           100% Fresh & Tasty Fruit, 0% Anything Else
         </h3>
       </div>
       <div className={styles.card}>
         FruitLand Parlor 2022, All rights reserved
         </div>
    </div>
  </div>
  );
};

export default Footer;
