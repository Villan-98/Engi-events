const route=require('express').Router()
route.get('/',((r,s)=>{
    s.send("On the event page")
}))
module.exports=route