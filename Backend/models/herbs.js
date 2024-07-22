const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const fertilizerSchema =new Schema({
    name:String,
    scientific_name:String,
    description:String,
    growing_conditions:{
        temperature: String,
        soil_type: String,
        sunlight:String
    },
    image:{ 
       filename:String,
       url: String,
    },
    price: Number,
    city:String,
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    cp:Number,
    available:Boolean, 
});
const herbs = mongoose.model("herbs",fertilizerSchema);
module.exports = herbs;