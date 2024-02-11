// passport-config.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcryptjs")
const User = require('../models/userModel');

const verifyCallBack = (username, password, done) => {
    User.findOne({ username: username })
        .then(user => {
            if (!user) {
                return done(null, false)                 
            }
            bcrypt.compare(password, user.password)
                .then(match => {
                    if (match) {
                        return done(null, user)
                    } else {
                        return done(null, false)                    

                    }
                })
                .catch(err => {
                    done(err)
                })
            
        })
}

const strategy = new LocalStrategy(verifyCallBack)

passport.use(strategy)

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then( user => {
            done(null, user)
        })
        .catch(err => done(err))
});

module.exports = passport;