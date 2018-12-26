const route=require('express').Router()
route.get('/',(req,res)=>{
    if(req.isAuthenticated())
    {
        res.send("welcome sir")
    }
    else
    {
        res.send("not authenticated")
    }
})
module.exports=route