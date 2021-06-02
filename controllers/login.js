const user = require("../models");

const passport = require('passport');

module.exports = function (app) {

    app.get('/account', ensureAuthenticated, function(req, res){
      res.render('account', { user: req.user, email: req.user.emails[0].value});
    });

    
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  user will be redirected to github.com.  After authorization, GitHub will redirect the user
    //   back to this application.
    app.get('/auth/github',
      passport.authenticate('github', { scope: [ 'user:email' ] }),
      function(req, res){
        // this function is not be called but redirected to github for authentication
      });

    //   Use passport.authenticate() to authenticate the
    //   request.  If authentication fails, the user will be redirected back to the
    //   login page. 
    app.get('/auth/github/callback',
      passport.authenticate('github', { failureRedirect: '/login' }),
      function(req, res) {
        //change to true when logged in
        module.exports.loggedIn = true;

        var username = req.user._json.login;
        var pictureUrl = req.user._json.avatar_url;
        var email = req.user._json.email;

        //uniquely logs user into database on login
        user.User.findOrCreate({
          where: {user_name: username
        }, defaults: {
          email: email
        }})
      .spread(function(user, created) {
        console.log(user.get({
          plain: true
        }));
        console.log(created);

        res.redirect('/');

        });

      });

    app.get('/logout', function(req, res){
      //change to false when logged out
      module.exports.loggedIn = false;

      req.logout();
      res.redirect('/');
    });

//function that passport uses to authenticate login, if fails then it redirects to home
    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      res.redirect('/');
    }

};

