const router = require("express").Router();
const { AddForm, ShowForm } = require("../Controllers/AddEventController");

router.post("/", AddForm);

router.get("/:id", ShowForm);

module.exports = router;
