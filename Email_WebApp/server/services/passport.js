const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

//Creating a cookie for the user. 
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

// Creating Google Auth through passport. Our api key etc will be set up here.
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true

    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({
            googleId: profile.id
        });

        if (existingUser) {
            //if the user already exist in the collections, procede. 
            return done(null, existingUser);
        }
        //If the user does not exist int the collections, create one
        const user = await new User({
            googleId: profile.id
        }).save()
        done(null, user);

    }));