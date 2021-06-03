const router = require('express').Router();
const { User } = require('../../models');


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

module.exports = router