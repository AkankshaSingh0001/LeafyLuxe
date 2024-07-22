const mongoose =require("mongoose");
const initData = require("./accdata.js");
const acc = require("../../models/accesories.js");

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
    await acc.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,city:"lucknow"}));
    initData.data=initData.data.map((obj)=>({...obj,owner:'65d42e1a89fceb0cf6a8b2e3'})); 
    initData.data=initData.data.map((obj)=>({...obj,available:false}));
    await acc.insertMany(initData.data);
    console.log("data was initialized");
};
 initDB();