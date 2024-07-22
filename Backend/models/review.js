const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const fertilizerSchema =new Schema({
    
    name: String,
  email: String,
  subject: String,
  message: String
});

// listingSchema.post("findOneAndDelete",async(listing)=>{
//  if(listing){
//     await Review.deleteMany({ _id:{$in: listing.reviews}});
// }
// });

const fertilizer = mongoose.model("reviews",fertilizerSchema);
module.exports = fertilizer;