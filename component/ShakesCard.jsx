import Image from "next/image";
import styles from "../styles/ShakesCard.module.css"
import Link from "next/link";

const ShakesCard = ({shakes}) => {
  return (
    <Link href={`/shakeProduct/${shakes._id}` } passHref>
      <div className={styles.container}>
        <Image src={shakes.img} alt=""  objectFit="contain" width={300} height={300}/>
        <h1 className={styles.title}>{shakes.title}</h1>
        <span className={styles.price}>${shakes.prices[0]}</span>
        <p className={styles.desc}>{shakes.desc}</p>
      </div>
    </Link>
  );
};

export default ShakesCard;
