const router = require("express").Router();
const { MyOrder } = require("../Controllers/MyOrderController");

router.get("/:id", MyOrder);

module.exports = router;
