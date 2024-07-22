const mongoose =require("mongoose");
const initData = require("./admindata");
const admin = require("../models/admin");

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
    await admin.deleteMany({});
    //initData.data=initData.data.map((obj)=>({...obj,city:"lucknow"}));
    await admin.insertMany(initData.data);
    console.log("data was initialized");
};
 initDB();