import Image from "next/image";
import styles from "../styles/MenuCard.module.css"
import Link from "next/link";

const MenuCard = ({fruits}) => {
  return (
   
  <Link href={`/fruitProduct/${fruits._id}`} passHref>
    <div className={styles.container}>
        <Image src={fruits.img} alt=""  objectFit="contain" width={300} height={300}/>
      <h1 className={styles.title}>{fruits.title}</h1>
      <span className={styles.price}>${fruits.prices[0]}</span>
      <p className={styles.desc}>{fruits.desc}</p>
    </div>
   </Link>
  );
};

export default MenuCard;
