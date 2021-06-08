const router = require("express").Router();

//sign up body
router.get('/', async (req, res) => {
  
    res.render('signUp')
})

module.exports = router