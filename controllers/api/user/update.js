const router = require('express').Router();
const { User } = require('../../../models');


  router.put('/', async (req, res) => {
    // 

try{

  // Find the logged in user based on the session ID
  const userData = await User.findOne({where: {id: req.session.user_id}});

  const user = userData.update(req.body,
  {where: {id: req.params},
  });
  res.status(200).json(user)

} catch (err) {
  res.status(500).json(err);
}



module.exports = router;