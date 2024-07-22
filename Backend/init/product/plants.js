const mongoose =require("mongoose");
const initData = require("./plantsdata.js");
const plants = require("../../models/plants.js");

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
    await plants.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,city:"lucknow"}));
    initData.data=initData.data.map((obj)=>({...obj,owner:'65f1d271bad4f8fb12ef6251'}));
    initData.data=initData.data.map((obj)=>({...obj,available:false}));
    await plants.insertMany(initData.data);
    console.log("data was initialized");
};
 initDB();