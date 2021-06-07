const router = require('express').Router();
const createUser = require ("./create")
// const deleteUser = require ("./delete");
// const editUser = require("./edit")



router.use("/create", createUser);
// router.use("/delete", deleteUser);
// router.use("/edit", editUser);


module.exports= router

