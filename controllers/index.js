const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.get('/', (req, res) => {
//     if(req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     res.render("login")
// })

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
router.get('/profile', async (req, res) => {
  
    res.render('profilepage')
})


module.exports = router