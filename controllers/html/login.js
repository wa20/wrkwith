const router = require("express").Router();

//login body
router.get('/', async (req, res) => {
  
    res.render('login')
})


module.exports = router;