const router = require("express").Router()
const apiRoutes = require("./api")
const htmlRoutes = require("./html")
// const withAuth = require('../utils/auth');
// const User = require('../models/user');

router.use("/api", apiRoutes)
router.use("/", htmlRoutes)



//upload function
router.get("/upload", async (req, res) => {
	res.render("upload")
})

module.exports = router
