const router = require("express").Router();
const { Project } = require("../../models");

router.get("/projects/:id", async (req, res) => {
  try {
    var id = req.params.id;
    const projects = await Project.findByPk(id);
    res.render("projectbyid", { projects });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

router.get("/projects", async (req, res) => {
  try {
    const projectdata = await Project.findAll();
    const projects = projectdata.map((project) => project.get());
    res.render("project", { projects });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

module.exports = router;
