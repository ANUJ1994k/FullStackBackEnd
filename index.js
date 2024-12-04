const express=require("express")
const app=express();
const PORT=3000;
const connectDB=require("./config/db")

app.get("/",(req,res)=>{
    res.status(201).json({message:"Server is working fine "})
})

app.listen(PORT,async ()=>{
await connectDB()
console.log("Server is running on port 3000 and http://localhost:3000");
})