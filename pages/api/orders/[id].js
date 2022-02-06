import dbConnect from "../../../lib/mongo";
import Order from "../../../models/Order";

export default async function handler(req,res){
  const {
    method,
    query:{id},
  }=req;
  dbConnect ();

  if(method === "GET"){
    try{
      const orders = await Order.find();
      res.status(200).json(orders)
    }catch(err){
      res.status(500).json(err);
    }
  }

  if(method === "PUT"){
  }

  if(method === "DELETE"){
  }
}