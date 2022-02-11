import dbConnect from "../../../lib/mongo";
import Order from "../../../models/Order";

export default async function handler(req,res){
  const {
    method,
    query:{id}
  }=req;
  await dbConnect ();

  if(method === "GET"){
    try{
      const order = await Order.findById(id);
      res.status(200).json(order);
    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "PUT"){
    try{
      const order = await Order.findByIdAndUpdate(id,req.body,{new:true,});
      res.status(201).json(order);
    } catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "DELETE"){  
    if(!token || token!==process.env.token){
    return res.status(401).json("Not authenticated");
    }
    try{
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch(err){
      res.status(500).json(err);
    }}
};