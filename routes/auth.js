const route=require('express').Router()
const passport=require('../passport/index')
const config=require('../config')
const ctrlUser=require('../controllers/user')

route.get('/signin',(req,res)=>{
    res.render('signin')
})
route.post('/signin',passport.authenticate('local',{
    successRedirect:'/admin',
    failureRedirect:'../auth/signin'
}))
route.get('/signup',(req,res)=>{
    res.render('signup')                                //temporary for creating admin credential
})
route.post('/signup',(req,res)=>{
    if(req.body.secret===config.secret)
    {
        ctrlUser.createUser(req.body)
            .then((data)=>{
                console.log(data)
                console.log("User Created")
            })
    }
    else
    {
        res.status(400).json({
            message:"bad Request"
        })
    }
})
module.exports=route