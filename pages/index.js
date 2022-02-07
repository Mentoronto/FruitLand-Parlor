import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Featured from '../component/Featured';
import Menu from '../component/Menu';


export default function Home({shakeproducts, fruitproducts,admin}) {
  
  return (
    <div>
      <Head>
        <title>FruitLand Parlor</title>
        <meta name="description" content="Healthiest and tastiest fruits in Toronto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Featured />
        {admin && <span> Hel </span>}
        <Menu shakeproducts={shakeproducts} fruitproducts={fruitproducts}/>
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
  const resOne = await axios.get("http://localhost:3000/api/shakeProducts"); 
  const resTwo = await axios.get("http://localhost:3000/api/fruitProducts");
  return{
    props:{
      shakeproducts:resOne.data,
      fruitproducts:resTwo.data,
      admin,
    },
  };
};