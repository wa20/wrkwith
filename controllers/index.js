const router = require('express').Router();
const apiRoutes = require('./api');
const withAuth = require('../utils/auth');
const User = require('../models/user');

router.use('/api', apiRoutes);

//homepage 
router.get('/', async (req, res) => {
  
    res.render('homepage')
})


//sign up body
router.get('/signup', async (req, res) => {
  
    res.render('signUp')
})

//login body
router.get('/login', async (req, res) => {
  
    res.render('login')
})


//community page
router.get('/community', async (req, res) => {
  
    res.render('community')
})

//profile page
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findOne({where: {id: req.session.user_id}});
  

      const user = userData.get({ plain: true });
  
      res.render('profilepage', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err.message);
    }
  });


  //edit profile page
  router.get('/editaccount', async (req, res) => {
    res.render('profileEditDetails')
  })

  //edit profile image page
  router.get('/editimage', async (req, res) => {
    res.render('profileEditImage')
  })

//logout
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router