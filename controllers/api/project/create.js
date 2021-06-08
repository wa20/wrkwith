const router = require('express').Router();
const withAuth = require("../../../utils/auth")
const { User, Project } = require('../../../models')


// creating a new project 

router.post("/new", async (req,res)=>{
    try{
        const newproject = await Project.create({
            title: req.body.title,
            tech: req.body.technology,
            details:req.body.details,
            creator:1
        })
        res.status(200).json(newproject)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router