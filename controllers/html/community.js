const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//community page
router.get("/", withAuth, async (req, res) => {
  try {
    const userdata = await User.findAll();
    const users = userdata.map((user) => user.get({ plain: true }));
    res.render("community", { users, logged_in: true });
  } catch (err) {
    console.log("we hit this error here" + err);
  }
});

module.exports = router;
