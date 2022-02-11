import styles from '../styles/Add.module.css';
import { useState } from 'react';
import axios from 'axios';

const Add = ({setClose}) => {
  const [file,setFile] = useState (null);
  const [title,setTitle] = useState (null);
  const [desc,setDesc] = useState (null);
  const [prices,setPrices] = useState ([]);
  const [extraOptions,setExtraOptions] = useState ([]);
  const [extra,setExtra] = useState (null);
  

  const changePrice = (e,index)=>{
    const currentPrices = prices;
    currentPrices[index]=e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) =>{
    setExtra({
      ...extra,
      [e.target.name]:e.target.value
      });
  };
  
  //create new Array of extra options
  const handleExtra = (e) =>{
    setExtraOptions((prev)=>[...prev, extra]);
  };

  const handleCreateFruit = async (e,index)=>{
      const fruitData = new FormData();
      fruitData.append("file",file);
      fruitData.append("upload_preset","uploads");

      try{

          if(!/\S/.test(title)|| title == null){
            alert("please fill in title");
          } else if (!/\S/.test(desc) || desc == null){
            alert("please fill description");
          } else if (prices.length < 3 ){
                alert("please fill in all prices");
          } else {
            
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dcinwqkln/image/upload", 
            fruitData);
            
            const { url } = uploadRes.data
            
            const newFruitProduct = {
              title,
              desc,
              prices,
              extraOptions,
              img:url,
            };
            const fruitPost = await axios.post("http://localhost:3000/api/fruitProducts", newFruitProduct);
            
            setClose(true);
            }
          }catch(err){
            console.log('err of fruit post:>> ', err);
          }  
        };
        
        const handleCreateShake = async()=>{
          const shakeData = new FormData();
          shakeData.append("file",file);
          shakeData.append("upload_preset","uploads")
          try{

            if(!/\S/.test(title)|| title == null){
              alert("please fill in title");
            } else if (!/\S/.test(desc) || desc == null){
              alert("please fill description");
            } else if (prices.length < 3 ){
                  alert("please fill in all prices");
            } else {
              
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dcinwqkln/image/upload", 
            shakeData
            );
            
            const {url} = uploadRes.data
            const newShakeProduct = {
              title,
              desc,
              prices,
              extraOptions,
              img:url,
            };
            await axios.post("http://localhost:3000/api/shakeProducts", newShakeProduct);
            setClose(true);
          }
    }catch(err){
      console.log('err of shake post:>> ', err);
    }  
};

  return ( 
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <span onClick={()=>setClose(true)} className={styles.close}>X</span>
      <h1>Add a new Product</h1>
      <div className={styles.item}>
        <label className={styles.label}>Choose an Image</label>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
      </div>
      <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input type="text" className={styles.input} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea rows={4} type="text" className={styles.input} onChange={(e)=>setDesc(e.target.value)}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
          <input type="number" min={0} inputMode="numeric"  placeholder='Small' className={`${styles.input} ${styles.inputSm}`}onChange={(e)=>changePrice(e,0)}/>
          <input type="number" min={0} inputMode="numeric" placeholder='Medium' className={`${styles.input} ${styles.inputSm}`}onChange={(e)=>changePrice(e,1)}/>
          <input type="number" min={0} inputMode="numeric" placeholder='Large' className={`${styles.input} ${styles.inputSm}`} onChange={(e)=>changePrice(e,2)}/>
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
            <div className={styles.extra}>
             <input type="text" className={`${styles.input} ${styles.inputSm}`}  onChange={handleExtraInput} name='text' placeholder='Item'/>
             <input type="number" className={`${styles.input} ${styles.inputSm}`}  onChange={handleExtraInput} name='price' placeholder='Price'/>
             <button className={styles.extraButton} onClick={handleExtra}>
               Add Extra Item
             </button>
            </div>
            <div className={styles.extraItems}>
                {extraOptions.map((option)=>(
                  <span key={option.text} className={styles.extraItem}>
                    {option.text}
                  </span>
                ))}
            </div>
        </div>
        <button className={styles.fruitButton} onClick={handleCreateFruit}>Create New Fruit</button>
        <button className={styles.shakeButton} onClick={handleCreateShake}>Create New Shake</button>
    </div>
  </div>
  );
};

export default Add;
