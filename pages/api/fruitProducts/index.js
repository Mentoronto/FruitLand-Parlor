import dbConnect from "../../../lib/mongo";
import fruitProduct from "../../../models/fruitProduct";

export default async function handler(req,res){
  const {method,cookies}=req;

  const token = cookies.token;

  await dbConnect ();

  if(method === "GET"){
    try{
      const products = await fruitProduct.find();
      res.status(200).json(products)
    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "POST"){
    if(!token || token!==process.env.token){
      return res.status(401).json("Not authenticated");
    }
    try{
      console.log("fruitproduct post try");
      const product = await fruitProduct.create(req.body);
      res.status(201).json(product);
    }catch(err){
      res.status(500).json(err);
      console.log("fruitproduct post error catch",err)
    
    }
  }
}