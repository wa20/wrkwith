const router = require("express").Router();
const { Project,User, Collab } = require("../../models");


// find all projects 
router.get("/", async (req, res) => {
    try {
      const projectdata = await Project.findAll({
        include:[
          {
            model:User,
            attributes:["user_name","avatar","email"]
          }
        ]
      });
      const projects = projectdata.map((project) => project.get({plain:true}));
      const project2 = JSON.stringify(projects)
      console.log("/////////////////// projects are " + project2)
      res.render("projects", { projects });
    } catch (err) {
      console.log("we hit this error here" + err);
    }
  });

  module.exports = router;