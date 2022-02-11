import dbConnect from "../../../lib/mongo";
import shakeProduct from "../../../models/shakeProduct";

export default async function handler(req,res){
  const {method,cookies}=req;

  const token = cookies.token;

  await dbConnect ();

  if(method === "GET"){
    try{
      const products = await shakeProduct.find();
      res.status(200).json(products)
    }catch(err){
      res.status(500).json(err);
      console.log(err);
    }
  }

  if(method === "POST"){
    if(!token || token!==process.env.token){
      return res.status(401).json("Not authenticated");
    }
    try{
      console.log("shakeproduct post try");
      const product = await shakeProduct.create(req.body);
      res.status(201).json(product);

    }catch(err){
      res.status(500).json(err);
      console.log("shakeproduct post error catch",err);
    }
  }
}