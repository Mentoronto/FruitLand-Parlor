import dbConnect from "../../../lib/mongo";
import shakeProduct from "../../../models/shakeProduct";

export default async function handler(req,res){
  const {
    method,
    query:{id},
    cookies
  }=req;

  const token = cookies.token;

  await dbConnect ();

  if(method === "GET"){
    try{
      const product = await shakeProduct.findById(id);
      res.status(200).json(product)
    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "PUT"){
    if(!token || token!==process.env.token){
      return res.status(401).json("Not authenticated");
    }
    try{
      const product = await shakeProduct.findByIdAndUpdate(id,req.body,{new:true,});
      res.status(201).json(product);

    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "DELETE"){
    if(!token || token!==process.env.token){
      return res.status(401).json("Not authenticated");
    }
    try{
      await shakeProduct.findByIdAndDelete(id);
      res.status(201).json("The Shake has been deleted!");
    }catch(err){
      res.status(500).json(err);
    }
  }
}