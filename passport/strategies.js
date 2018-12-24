const LocalStrategy = require('passport-local').Strategy
const User = require('../db/model').user
//console.log("here 3")
const localStrategy = new LocalStrategy(function
    (username, password, done)  {
    console.log(username,password)
    //console.log("here4")
    User.findOne({username: username },function (error,user){
     if(error){
         console.log(error)
         return done(error)
     }
    if (!user) {
        //Wrong username
        return done(null, false, {message: 'Wrong username'})
    }
    if (user.password === password) {
        // Correct user and password
        return done(null, user)
    } else {
        // Correct username, wrong password
        return done(null, false, {message: 'Wrong password'})
    }
})
})

module.exports =localStrategy
