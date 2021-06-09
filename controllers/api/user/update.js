const router = require('express').Router();
const { User } = require('../../../models');
const withAuth = require("../../../utils/auth")



router.put('/', withAuth, async (req, res) => {
  try { 
    const updateUser = await User.update(
      {
        user_name: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          first_name:req.body.firstName,
          last_name:req.body.lastName,
          bio:req.body.bio
      },
      {
        where  : {
          id: req.session.user_id,
        }},
    )
    console.log('updateUser',updateUser)
    res.status(200)

  } catch (err) {

    res.status(500).json(err)
    console.log("update profile error", err)
    
  }

  

})


module.exports = router;


