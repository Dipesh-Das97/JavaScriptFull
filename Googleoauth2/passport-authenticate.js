const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });

passport.use(new GoogleStrategy({ //define a new google strategy
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL, //user gets redirected to
        passReqToCallback: true
},
        function (request, accessToken, refreshToken, profile, done) {//done is the callback function that gets called which receives the accessTeken, refreshToken and profile and is requiured to complete the authentication process
                //console.log(profile)
                User.findOrCreate({ googleId: profile.id }, function (err, user) {
                        return done(err, user);
                });
        }
));