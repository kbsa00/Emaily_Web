const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose'); 
const User  = mongoose.model('users'); 

//Creating a cookie for the user. 
passport.serializeUser((user, done) =>{
    done(null, user.id); 
});

passport.deserializeUser((id, done) =>{
    User.findById(id).then(user => {
        done(null, user); 
    });
});

// Creating Google Auth through passport. Our api key etc will be set up here.
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret, 
    callbackURL: '/auth/google/callback'

}, (accessToken, refreshToken, profile, done) =>{
    User.findOne({googleId: profile.id})
        .then((existingUser) =>{
            if(existingUser){
                //if the user already exist in the collections, procede. 
                done(null, existingUser);
            }
            else{
                //If the user does not exist int the collections, create one
                new User({googleId: profile.id})
                    .save()
                    .then(user => done(null, user)); 

            }
        }); 
     

}));
