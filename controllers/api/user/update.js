const router = require('express').Router();
const { User } = require('../../../models');
const withAuth = require("../../../utils/auth")


//   router.put('/', async (req, res) => {
//     // 

// try{

//   // Find the logged in user based on the session ID
//   const userData = await User.findOne({where: {id: req.session.user_id}});

//   const user = userData.update(req.body,
//   {where: {id: req.params},
//   });
//   res.status(200).json(user)

// } catch (err) {
//   res.status(500).json(err);
// }
//   })


router.put('/', withAuth, async (req, res) => {

  try{
    const updateUser = await User.update({
      where :
      {
        id: req.session.user_id,
      },
      {
        user_name: req.body.userName,
          email: req.body.email,
          // password: req.body.password,
          first_name:req.body.firstName,
          last_name:req.body.lastName,
          bio:req.body.nio
      },
    
    })

  } catch (err) {
    
  }


})



module.exports = router;


// create new user 
router.post("/signup" , async (req,res)=>{
  try{
      const newuser=await User.create({
          user_name: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          first_name:req.body.firstName,
          last_name:req.body.lastName
      })
      res.json(newuser)
  } catch (err) {
      res.status(500).json(err)
  }
})