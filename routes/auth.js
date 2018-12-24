const  route=require('express').Router()
const passport=require('../passport/index')
route.post('/signin',passport.authenticate('local',{
    successRedirect:'../acb',           //temporary
    failureRedirect:'../auth/signin'
}))
exports.module=route