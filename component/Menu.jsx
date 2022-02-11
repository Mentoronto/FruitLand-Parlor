import Image from "next/image";
import styles from "../styles/Menu.module.css"
import MenuCard from "./MenuCard";
import ShakesCard from "./ShakesCard";


const Menu = ({shakeproducts,fruitproducts}) => {
  return (
  <div className={styles.container} id="Main-section">
    <div className={styles.leaves}>
      <Image src="/img/leaf.png" alt="" width={550} height={550}/> 
    </div>
    <div className={styles.leaves2}>
      <Image src="/img/leaf.png" alt="" width={550} height={550}/> 
    </div>
    <h1 className={styles.title}>Fruit Menu</h1>
    <p className={styles.desc}>
    There are many gifts that can be sent to friends and families when they are well, but when something unfortunate happens or when someone is ill, you only ever send them flowers or fruits as a gesture of good fortune and health.<br></br>We seek to provide luxury fruits based on season to present to your family or friends as a 'Get Well Soon' gift.
    </p>
    <div className={styles.wrapper}>
      {fruitproducts.map(fruits=>(
      <MenuCard key={fruits._id} fruits={fruits}/>
      ))}
    </div>
    <h1 className={styles.title}>Shakes Menu</h1>
    <p className={styles.desc}>
    Why settle for watered down fruit sugars that merely quench your thirst? Our shakes are a concentrated cup of health with amazing flavors!
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
