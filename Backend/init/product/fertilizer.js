const mongoose =require("mongoose");
const initData = require("./data.js");
const fertilizer = require("../../models/fertilizer.js");

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
    await fertilizer.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,city:"lucknow"}));
    initData.data=initData.data.map((obj)=>({...obj,owner:'65ccd075f622082521a5c5be'}));
    initData.data=initData.data.map((obj)=>({...obj,available:false}));
    await fertilizer.insertMany(initData.data);
    console.log("data was initialized");
  
};
 initDB();