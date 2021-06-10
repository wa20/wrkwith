const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require("../../utils/auth")


  //get details to edit project
  router.get('/:id',  async (req, res) =>{
    
    
    try{
    const projectData = await Project.findOne({where: {id: req.params.id}});
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