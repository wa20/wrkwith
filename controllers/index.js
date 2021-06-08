const router = require("express").Router()
const apiRoutes = require("./api")
const htmlRoutes = require("./html")
// const withAuth = require('../utils/auth');
// const User = require('../models/user');

router.use("/api", apiRoutes)
router.use("/html", htmlRoutes)

//logout
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

//upload function
router.get("/upload", async (req, res) => {
	res.render("upload")
})

module.exports = router
