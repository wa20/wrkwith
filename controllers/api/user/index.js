const router = require('express').Router();
const createUser = require ("./create")
const deleteUser = require ("./delete");
const updateUser = require("./update")



router.use("/create", createUser);
router.use("/delete", deleteUser);
router.use("/update", updateUser);


module.exports= router

