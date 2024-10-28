const router = require("express").Router();
const { Payment } = require("../Controllers/PaymentController");

router.post("/", Payment);

module.exports = router;
