const router = require('express').Router();


// create new project page
router.get("/", async (req,res) =>{
   res.render("newproject")
})

module.exports = router;