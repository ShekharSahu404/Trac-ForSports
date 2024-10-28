const FormData = require("../Models/FormModel");
const router = require("express").Router();

const ShowForm = async (req, res) => {
  try {
    const items = await FormData.find();
    res.json(items);
  } catch (error) {
    console.error("Failed to get Data");
    res.status(500).send("Internal Server Error");
  }
};

const GetDataById = async (req, res) => {
  const dataId = req.params.id;
  try {
    const data = await FormData.findOne({ _id: dataId });
    if (data) {
      res.send(data);
    } else {
      res.status(404).send("Data not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

router.get("/", ShowForm);
router.get("/:id", GetDataById);

module.exports = router;
