import Image from "next/image";
import styles from "../styles/Menu.module.css"
import MenuCard from "./MenuCard";
import ShakesCard from "./ShakesCard";


const Menu = ({shakeproducts,fruitproducts}) => {
  return (
  <div className={styles.container}>
    <div className={styles.leaves}>
      <Image src="/img/leaf.png" alt="" width={550} height={550}/> 
    </div>
    <div className={styles.leaves2}>
      <Image src="/img/leaf.png" alt="" width={550} height={550}/> 
    </div>
    <h1 className={styles.title}>Delicious Fruit</h1>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident ad obcaecati ea omnis ipsa a excepturi laudantium. Quis explicabo necessitatibus, mollitia consequatur totam suscipit minima dicta ipsum! Aut, labore?
    </p>
    <div className={styles.wrapper}>
      {fruitproducts.map(fruits=>(
      <MenuCard key={fruits._id} fruits={fruits}/>
      ))}
    </div>
    <h1 className={styles.title}>Delicious Shakes</h1>
    <p className={styles.desc}>
      Shakes Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident ad obcaecati ea omnis ipsa a excepturi laudantium. Quis explicabo necessitatibus, mollitia consequatur totam suscipit minima dicta ipsum! Aut, labore?
    </p>
    <div className={styles.shakesWrapper}>
      {shakeproducts.map(shakes=>(
        <ShakesCard key={shakes._id} shakes={shakes}/>
      ))}
    </div>
  </div>   
  )
};

export default Menu;
