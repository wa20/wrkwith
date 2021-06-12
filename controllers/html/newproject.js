const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require("../../utils/auth")


// create new project page
router.get("/", withAuth, async (req,res) =>{

   res.render("newproject",  {logged_in: true})
})

module.exports = router;