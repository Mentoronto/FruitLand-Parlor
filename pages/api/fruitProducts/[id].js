import dbConnect from "../../../lib/mongo";
import fruitProduct from "../../../models/fruitProduct";

export default async function handler(req,res){
  const {
    method,
    query:{id},
  }=req;

  dbConnect ();

  if(method === "GET"){
    try{
      const product = await fruitProduct.findById(id);
      res.status(200).json(product)
    }catch(err){
      res.status(600).json(err);
    }
  }

  if(method === "PUT"){
    try{
      const product = await fruitProduct.create(req.body);
      res.status(201).json(product);

    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "DELETE"){
    try{
      await fruitProduct.findByIdAndDelete(id);
      res.status(201).json("The fruit has been deleted");
    }catch(err){
      res.status(500).json(err);
    }
  }
}