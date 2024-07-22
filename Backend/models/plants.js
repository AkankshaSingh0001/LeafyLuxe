const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const plantsSchema =new Schema({
    name:String,
    description:String,
    price: Number,
    core_instructions:String,
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

const plants = mongoose.model("plants",plantsSchema);
module.exports = plants;