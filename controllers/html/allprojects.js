const router = require("express").Router();
const { Project,User, Collab } = require("../../models");


// find all projects 
router.get("/", async (req, res) => {
    try {
      const projectdata = await Project.findAll();
      const projects = projectdata.map((project) => project.get());
      res.render("projects", { projects });
    } catch (err) {
      console.log("we hit this error here" + err);
    }
  });

  module.exports = router;