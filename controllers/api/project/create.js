const router = require('express').Router();
const withAuth = require("../../../utils/auth")
const { User, Project, Collab } = require('../../../models');
const { parse } = require('dotenv');



// creating a new project 

router.post("/new", withAuth, async (req,res)=>{

    try{
        console.log("///////////////////////////////////////////NEW PROJECT")
        console.log("user id is" + req.session.user_id)
        
        console.log("req body= " + req.body.title)
        console.log("///////////////////////////////////////////////")
        const newproject = await Project.create({
            title: req.body.title,
            tech: req.body.technology,
            details:req.body.details,
            creator:req.session.user_id
        })
        res.status(200).json(newproject)
    } catch (err) {
        res.status(500).json(err)
    }
})


// collab on this prject 
router.post("/collab", withAuth , async (req ,res) => {
    try {

        console.log("||||||||||| project id=" + req.body.projectid + " and user id is= " + req.session.user_id)
        const newCollab = await Collab.create({
            project_id: req.body.projectid,
            user_id:req.session.user_id
        })
        res.status(200).json(newCollab)
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = router