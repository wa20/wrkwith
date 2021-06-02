const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.get('/', (req, res) => {
//     if(req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     res.render("login")
// })


router.get('/', async (req, res) => {
  
    res.render('signUp')
})

module.exports = router