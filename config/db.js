const mongoose=require("mongoose");

const connectDB=async ()=>{
try{
await mongoose.connect(process.env.MONGOURI);
console.log("Mongodb database connected successfully");
}catch(err) {
    console.log(err);
}
}

module.exports= connectDB;