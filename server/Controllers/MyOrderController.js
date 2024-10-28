const RegEventModel = require("../Models/RegisterModel");
const FormData = require("../Models/FormModel");

module.exports.MyOrder = async (req, res) => {
  try {
    const dataId = req.params.id;
    const data = await RegEventModel.find({ buyerId: dataId });

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
