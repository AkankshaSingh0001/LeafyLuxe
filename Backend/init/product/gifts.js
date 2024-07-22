const mongoose =require("mongoose");
const initData = require("./giftsdata.js");
const gifts = require("../../models/gifts.js");

const MONGO_URL="mongodb://127.0.0.1:27017/leafyluxe";
main().then(()=>{
    console.log("connected to db");
}).catch(err=>{console.log(err);
});
async function main()
{
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await gifts.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,city:"lucknow"}));
    initData.data=initData.data.map((obj)=>({...obj,owner:'65ce2379d9f21ec5e909edf0'}));
    initData.data=initData.data.map((obj)=>({...obj,available:false}));
    await gifts.insertMany(initData.data);
    console.log("data was initialized");
};
 initDB();