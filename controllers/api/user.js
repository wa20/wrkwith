const router = require('express').Router();
const { User } = require('../../models');


router.post("/" , async (req,res)=>{
    try{
        const newuser=await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json(newuser)
    } catch (err) {
        res.status(500).json(err)
    }
})