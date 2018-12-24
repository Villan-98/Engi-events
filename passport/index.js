
const passport = require('passport')
const strategies = require('./strategies')
const User = require('../db/model').user

passport.use(strategies.localStrategy)
console.log("here2")
passport.serializeUser(function (user, done) {
    console.log('serialize' + user.id)
    done(null, user.id)
})

passport.deserializeUser(function(userId, done) {
    console.log('deserialize' + userId)

    User.findOne({id: userId},(function(user) { done(null, user)}))


})

exports = module.exports = passport