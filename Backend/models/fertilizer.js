const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const fertilizerSchema =new Schema({
    price: Number,
    quantity:Number,
    name:String,
    type:String,
    nutrient_content:{
        nitrogen:Number,
        phosphorous:Number,
        potasium:Number,
    },
  
    image:{
       
       filename:String,
       url: String,
       
    },
    manufacturer:String,
    city:String,
    owner:{
        type:Schema.Types.ObjectId, 
        ref:"User"
    },
  
    cp:Number,
    available:Boolean, 
});

// listingSchema.post("findOneAndDelete",async(listing)=>{
//  if(listing){
//     await Review.deleteMany({ _id:{$in: listing.reviews}});
// }
// });

const fertilizer = mongoose.model("fertilizer",fertilizerSchema);
module.exports = fertilizer;