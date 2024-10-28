const router = require("express").Router();
const { RegisterEvent } = require("../Controllers/RegisterController");

router.post("/", RegisterEvent);

module.exports = router;
