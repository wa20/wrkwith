const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const newuser = await User.create({
      user_name: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
    });
    res.json(newuser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/community", async (req, res) => {
  try {
    const userdata = await User.findAll();
    const users = userdata.map((user) => user.get({ plain: true }));
    res.render("community", { users });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

router.get("/community", async (req, res) => {
  try {
    const userdata = await User.findAll();
    const users = userdata.map((user) => user.get({ plain: true }));
    res.render("community", { users });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

router.get("/community", async (req, res) => {
  try {
    const userdata = await User.findAll();
    const users = userdata.map((user) => user.get({ plain: true }));
    res.render("community", { users });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

//Profile page
router.get("/profile", async (req, res) => {
  try {
    const userdata = await User.findByPk();
    const users = userdata.map((user) => user.get({ plain: true }));
    res.render("profilepage", { users });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

module.exports = router;
