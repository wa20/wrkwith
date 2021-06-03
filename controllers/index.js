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

//sign up body
router.get('/', async (req, res) => {
  
    res.render('signUp')
})

//login body
router.get('/login', async (req, res) => {
  
    res.render('login')
})

module.exports = router