
const router = require('express').Router();
const { User } = require('../../models');

//community page
router.get("/", async (req,res) => {
    try {
        const userdata= await User.findAll();
        const users = userdata.map((user)=>user.get({plain:true}));
        res.render("community",{users});
    } catch(err){
        console.log("we hit this error here" + err)
    }
})


module.exports = router;