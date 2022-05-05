const { Router } = require("express");
const router = Router();
const { getInfo } = require("../controllers/bioController");
const User = require("../controllers/bioController");

router.route("/").get(User.findAll);

module.exports = router;
