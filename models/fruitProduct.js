import mongoose from "mongoose";

const fruitProductSchema = new mongoose.Schema({
    title:{
      type:String, 
      required:true,
      maxlength:60,
    },

    desc:{
      type:String, 
      required:true,
      maxlength:300,
    },

    img:{
      type:String, 
      required:true,
    },

    prices:{
      type:[Number],
      required:true
    },
    extraOptions:{
      type:[
        {
          text:{type:String},
          price:{type:Number},
        },
      ],
    },
  },
{timestamps:true}
);

export default mongoose.models.fruitProduct || mongoose.model("fruitProduct", fruitProductSchema); 
