const router = require("express").Router();

const createProject = require("./create");
const deleteProject = require("./delete");
const editProject = require("./edit");


router.use("/create", createProject);
router.use("/delete",deleteProject);
router.use("/edit",editProject);

module.exports = router 