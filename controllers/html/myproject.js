const router = require ("express").Router();
const { Project,User, Collab } = require("../../models");



// find one project by id 
router.get("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    const projectdata = await Project.findByPk(id, {
      include:[
        {
          model:User,
          attributes:["user_name","avatar"]
        },
        {
          model:Collab,
          include:{
            model:User,
            attributes:["user_name","avatar"]
          }
        }
      ]
    });
    const projects=projectdata.get({plain:true});
    const project2 = JSON.stringify(projects)
    console.log("/////////////this is projects " + project2)
    res.render("myproject", { ...projects });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});


module.exports = router 