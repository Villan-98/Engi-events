const LocalStrategy = require('passport-local').Strategy
const User = require('../db/models/user')

const localStrategy = new LocalStrategy(
    (username, password, done) => {
        console.log(username,password)
        User.findOne({
                username: username

        }).then((user) => {
            console.log(user)
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

        }).catch((err) => {
            return done(err)
        })
    })

exports = module.exports = {
    localStrategy
}