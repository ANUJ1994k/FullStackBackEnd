const mongoose=require('mongoose');

const blogSchema= new mongoose.model({
    title:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true

    }
})

const Blog=mongoose.model("Blog",blogSchema);
module.exports=Blog;