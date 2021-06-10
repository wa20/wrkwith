const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require("../../utils/auth")


  //get details to edit project
  router.get('/',  async (req, res) =>{
    
    
    try{
    const projectData = await Project.findOne({where: {id: req.body.id}});
      const project = projectData.get({plain: true});
      res.render('project-edit', {
        ...project,
        // logged_in: true
      });
  
  } catch (err) {
    res.status(500).json(err.message);
}

  })




module.exports = router;