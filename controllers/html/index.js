const router = require("express").Router();

const communityRoute = require("./community");
const logoutRoute = require("./logout");
const profileRoute = require("./profile");
const oneProject = require("./projectfindone");
const allProjects = require("./allprojects");
const homeRoute = require("./homepage")
const signupRoute = require("./signup")
const loginRoute = require("./login")

router.use("/community", communityRoute);
router.use("/logout", logoutRoute);
router.use("/profile", profileRoute);
router.use("/project",oneProject);
router.use("/projects",allProjects);
router.use("/homepage",homeRoute);
router.use("/signup", signupRoute);
router.use("/login" , loginRoute);


module.exports = router

