const { Signup, Login, Logout } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddlleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.post("/logout", Logout);

module.exports = router;
