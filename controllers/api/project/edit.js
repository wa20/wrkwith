const router = require('express').Router();
const { Project } = require('../../../models');
const withAuth = require("../../../utils/auth")



router.put('/', withAuth, async (req, res) => {
  try { 
    const updateProject = await Project.update(
      {
      title:req.body.title,
      details:req.body.details,
      tech:req.body.tech
      },
      {
        where  : {
          id: req.body.id
        }},
    )
    
    res.status(200).json(updateProject)

  } catch (err) {

    res.status(500).json(err)
    console.log("update profile error", err)
    
  }

  

})


module.exports = router;

