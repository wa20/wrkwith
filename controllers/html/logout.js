const router = require('express').Router();

// logout user and redirect to homepage

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('homepage');
  });



  module.exports = router


  