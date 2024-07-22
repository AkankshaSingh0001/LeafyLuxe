const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const fertilizerSchema =new Schema({
    
   
    name:String,
    description:String,
    price: Number,
    material:String,
    image:{
       
       filename:String,
       url: String,
       
    },
    manufacturer:String,
    city: String,
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    
    cp:Number,
    available:Boolean, 
});



const fertilizer = mongoose.model("accesories",fertilizerSchema);
module.exports = fertilizer;