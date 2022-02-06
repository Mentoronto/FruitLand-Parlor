import mongoose from "mongoose";

const shakeProductSchema = new mongoose.Schema({
    title:{
      type:String, 
      required:true,
      maxlength:60,
    },

    img:{
      type:String, 
      required:true,
    },

    desc:{
      type:String, 
      required:true,
      maxlength:300,
    },

    prices:{
      type:[Number],
      required:true
    },

    extraOptions:{
      type:[
        {
          text:{type:String, required:true},
          price:{type:Number,required:true}
        },
      ],
    },
    bg:{
      type:String,
      required:true
    },
  },
 {timestamps:true}
);

export default mongoose.models.shakeProduct || mongoose.model("shakeProduct", shakeProductSchema); 

//if model already exists, do not create it again. If none, create new model