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


  router.get("/upload", async(req,res)=>{
    res.render("upload")
})
module.exports = router