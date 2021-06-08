const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require("../../utils/auth")

//Profile page
// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findOne({where: {id: req.session.user_id}});
  

      const user = userData.get({ plain: true });
  
      res.render('profilepage', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err.message);
    }
  });


  

module.exports= router;