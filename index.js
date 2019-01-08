/* Created by Villan-98 on 14-12-2018*/

const express=require('express')
const path=require('path')
const hbs=require('express-hbs')
const expressSession=require('express-session')
const passport=require('./passport/index')
const events=require('./controllers/events')
const dbConnection=require('./db/connection')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(expressSession({
    secret:'easy very easy',
    resave:false,
    saveUninitialized:false,

}))
        //view setup//
app.set("view engine",'hbs')
app.set("views","views")
app.engine('hbs',hbs.express4({
    defaultLayout:path.join(__dirname,'views/layout/default')
}))

console.log("here1")
app.use(passport.initialize())
app.use(passport.session())
app.use('/admin',require('./routes/admin'))
app.use('/events',require('./routes/events'))
app.use('/auth',require('./routes/auth'))
app.get('/',(r,s)=>{
    events.fetchEvents()
        .then((category)=>{
            console.log(category)

            s.render("home",{category})
        })
})
app.listen(4000,(()=>{
    console.log("Listening to port 4000...")
}))
