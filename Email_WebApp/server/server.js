const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport'); 

require('./models/user'); 
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys'); 

const app = express();

//Making express to use Cookies. 
app.use(
    cookieSession({
        //Max-Age is how long can this cookie exist inside the browser before it expires.
        //In this case this cookie will last for 30 days, but has to be written in milliseconds.
        maxAge: 30 * 24 * 60 * 60 * 1000, 
        //Second thing is a key that will be used to encrypt the cookie. 
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session()); 

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app); 

const PORT = process.env.PORT  || 5000; 
app.listen(PORT);
console.log('Listening to port 5000');

 