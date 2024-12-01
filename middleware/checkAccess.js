const checkAccess=(acceptedRole)=>{
return(req,res,next)=>{
    if(req.Role===acceptedRole){
        next();
    }else{
        res.status(401).send({message:"Not Authorized"})
    }
}
}

module.exports=checkAccess;