import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Add from '../component/Add';
import AddButton from '../component/AddButton';
import Featured from '../component/Featured';
import Menu from '../component/Menu';



export default function Home({shakeproducts, fruitproducts,admin}) {
  const [close,SetClose]=useState(true);

  return (
    <div>
      <Head>
        <title>FruitLand Parlor</title>
        <meta name="description" content="Healthiest and tastiest fruits in Toronto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Featured />
        {admin && <AddButton SetClose={SetClose}/>}
        <Menu shakeproducts={shakeproducts} fruitproducts={fruitproducts}/>
        {!close && <Add SetClose={SetClose}/>}
    </div>
  )
}

export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies|| "";
  let admin = false;

  if(myCookie.token === process.env.TOKEN){
    admin=true;
  }
  // axios.defaults.baseURL = 'http://localhost:3000/';
  const resOne = await axios.get("https://fruit-land-parlor.vercel.app/api/shakeProducts"); 
  const resTwo = await axios.get("https://fruit-land-parlor.vercel.app/fruitProducts");
  
  return{
    props:{
      shakeproducts:resOne.data,
      fruitproducts:resTwo.data,
      admin,
    },
  };
};