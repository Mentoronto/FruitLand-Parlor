import dbConnect from "../../../lib/mongo";
import fruitProduct from "../../../models/fruitProduct";

export default async function handler(req,res){
  const {method}=req;

  dbConnect ();

  if(method === "GET"){
    try{
      const products = await fruitProduct.find();
      res.status(200).json(products)
    }catch(err){
      res.status(700).json(err);
    }
  }

  if(method === "POST"){
    try{
      const product = await fruitProduct.create(req.body);
      res.status(201).json(product);

    }catch(err){
      res.status(501).json(err);
    }
  }
}