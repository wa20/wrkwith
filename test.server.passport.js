//dependencies
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
//for github passport
var GITHUB_CLIENT_ID = " ";
var GITHUB_CLIENT_SECRET = " ";
// Passport session setup.
//   Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "" //heroku link
  },
  function(accessToken, refreshToken, profile, done) {

    process.nextTick(function () {
      
      return done(null, profile);
    });
  }
));
app.use(passport.initialize());
app.use(passport.session());

