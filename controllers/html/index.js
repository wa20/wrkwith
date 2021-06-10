const router = require("express").Router();

const communityRoute = require("./community");
const logoutRoute = require("./logout");
const profileRoute = require("./profile");
const editProfileRoute = require("./profile-edit")
const editProfileImageRoute = require("./profile-image")
const oneProject = require("./projectfindone");
const allProjects = require("./allprojects");
const homeRoute = require("./homepage")
const signupRoute = require("./signup")
const loginRoute = require("./login")
const newprojectroute = require("./newproject")
const editProjectRoute=require("./project-edit")
const myprojectRoute=require("./myproject")
// const viewUserRoute = require("./view-user")



//routes
router.use("/community", communityRoute);
router.use("/logout", logoutRoute);
router.use("/profile", profileRoute);
router.use("/profile-edit", editProfileRoute);
router.use("/profile-image", editProfileImageRoute);
router.use("/project",oneProject);
router.use("/projects",allProjects);
router.use("/homepage",homeRoute);
router.use("/signup", signupRoute);
router.use("/login" , loginRoute);
router.use("/newproject", newprojectroute)
router.use("/editproject", editProjectRoute)
router.use("/myproject",myprojectRoute)
// router.use("/view-user", viewUserRoute )


module.exports = router

