const router = require("express").Router();


//homepage 
router.get('/', async (req, res) => {
  
    res.render('homepage')
})

module.exports = router
