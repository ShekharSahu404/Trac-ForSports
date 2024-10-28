const RegEventModel = require("../Models/RegisterModel");

module.exports.RegisterEvent = async (req, res) => {
  try {
    const {
      id,
      regData,
      total,
      title,
      temp,
      currId,
      date,
      location,
      subEvent,
      img,
    } = req.body;

    const RegEveSchema = new RegEventModel({
      eventId: id,
      UserName: regData.userName,
      EventName: title,
      teamName: regData.teamName,
      total: total,
      regid: temp,
      buyerId: currId,
      date: date,
      location: location,
      subEvent: subEvent,
      img: img,
    });
    await RegEveSchema.save();
    const data = await RegEventModel.findOne({
      eventId: id,
    });
    res.status(200).send(data);
  } catch (error) {
    console.error("Failed to save form:", error);
    res.status(500).send("Internal Server Error");
  }
};
