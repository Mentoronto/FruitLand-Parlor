import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight,faChevronCircleLeft  } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Featured = () => {
  const [index,SetIndex] = useState(0);

  const images = [
    "/img/Featured2.png",
    "/img/Featured3.png",
    "/img/Featured4.png",
  ];

  const handleArrow =(direction)=>{
    if (direction == "l"){
      SetIndex(index !==0 ? index-1 : 2) 
    }
    if (direction == "r"){
      SetIndex(index !==2 ? index+1 : 0) 
    }
  }

  return (
  <div className={styles.container}>
    <div className={styles.arrowContainer} style={{left:0}}>
    <FontAwesomeIcon icon={ faChevronCircleLeft }  objectFit="contain" onClick={()=>handleArrow("l")}/>
    </div>
    <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
       {images.map((img,i)=>(
      <div className={styles.imgContainer} key={i} >
         <Image src={img}  layout="fill" objectFit="contain"/>
      </div>
         ))}
    </div>
    <div className={styles.arrowContainer} style={{right:0}}> 
    <FontAwesomeIcon icon={ faChevronCircleRight }  objectFit="contain" onClick={()=>handleArrow("r")}/>
    </div>
  </div>
  );

};

export default Featured;
