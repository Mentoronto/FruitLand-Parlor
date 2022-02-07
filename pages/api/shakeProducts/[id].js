import dbConnect from "../../../lib/mongo";
import shakeProduct from "../../../models/shakeProduct";

export default async function handler(req,res){
  const {
    method,
    query:{id},
  }=req;

  dbConnect ();

  if(method === "GET"){
    try{
      const product = await shakeProduct.findById(id);
      res.status(200).json(product)
    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "PUT"){
    try{
      const product = await shakeProduct.create(req.body);
      res.status(201).json(product);

    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "DELETE"){
    try{
      await shakeProduct.findByIdAndDelete(id);
      res.status(201).json("The Shake has been deleted!");
    }catch(err){
      res.status(500).json(err);
    }
  }
}