const router = require('express').Router();

router.get('/', async (req, res) => {
  
    res.render('signUp')
})

module.exports = router