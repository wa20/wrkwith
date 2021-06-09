const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require("../../utils/auth")


  //get details to edit profile
  router.get('/', withAuth, async (req, res) =>{
    //Find the logged in user based on the session ID
    
    try{
    const userData = await User.findOne({where: {id: req.session.user_id}});
      const user = userData.get({plain: true});
      res.render('profile-edit', {
        ...user,
        logged_in: true
      });
  
  } catch (err) {
    res.status(500).json(err.message);
}

  })




module.exports = router;