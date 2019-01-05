const route=require('express').Router()
route.get('/',(req,res)=>{
    if(req.isAuthenticated())
    {
        res.render('admin')
    }
    else
    {
        res.redirect("/auth/signin")
    }
})
module.exports=route