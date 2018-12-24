/* Created by Villan-98 on 14-12-2018*/

const express=require('express')
const path=require('path')
const expressSession=require('express-session')
const passport=require('./passport/index')
const user=require('./db/model')
//temp
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(expressSession({
    secret:'easy very easy',
    resave:false,
    saveUninitialized:false,

}))
console.log("here1")
app.use(passport.initialize())
app.use(passport.session())

//app.use('/auth/signin',express.static(__dirname+'/public_html/signin'))
app.use('/events',require('./routes/events'))
app.use('/auth',require('./routes/auth'))
app.listen(3000,(()=>{
    console.log("Listening to port 3000...")
}))
