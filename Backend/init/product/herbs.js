const mongoose =require("mongoose");
const initData = require("./herbsdata.js");
const herbs = require("../../models/herbs.js");

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
    await herbs.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,city:"lucknow"}));
    initData.data=initData.data.map((obj)=>({...obj,owner:'65d42ed889fceb0cf6a8b2f3'}));
    initData.data=initData.data.map((obj)=>({...obj,available:false}));
    await herbs.insertMany(initData.data);
    console.log("data was initialized");
};
 initDB();