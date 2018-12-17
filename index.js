/* Created by Villan-98 on 14-12-2018*/

const express=require('express')
const path=require('path')
require('./db/model')

const app=express()
app.get('/',((r,s)=>{
    s.send("Linstening ypu")
}))
app.use('/events',require('./routes/events'))

app.listen(3000,(()=>{
    console.log("Listening to port 3000...")
}))
