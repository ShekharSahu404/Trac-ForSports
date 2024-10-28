const FormModel = require("../Models/FormModel");

module.exports.AddForm = async (req, res, next) => {
  try {
    const { inputs, imageurl, subForms, creatorId } = req.body;

    // Construct the main form document
    const newForm = new FormModel({
      title: inputs.title,
      about: inputs.about,
      summery: inputs.summery,
      entryfee: inputs.entryfee,
      eventday: inputs.eventday,
      eventdate: inputs.eventdate,
      location: inputs.location,
      contact: inputs.contact,
      imageurl: imageurl,
      creatorId: creatorId,

      subForms: subForms.map((sf) => ({
        subEvent: sf.subEvent,
        date: sf.date,
        time: sf.time,
        price: sf.price,
        category: sf.category,
      })),
    });

    // const result = await FormModel.insertOne(req.body);
    // res.send({ id: result.insertedId });
    // Save the form
    await newForm.save();

    const data = await FormModel.findOne({
      title: inputs.title,
      contact: inputs.contact,
    });
    res.status(200).send(data);
  } catch (error) {
    console.error("Failed to save form:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.ShowForm = async (req, res) => {
  const userId = req.params.id;
  console.log("Request Id:", userId);
  try {
    const eventId = await FormModel.findById(userId);
    if (eventId) {
      res.send("event found!");
    } else {
      res.status(404).send("Event not found");
    }
    console.log("Request Id:", userId);
    res.send("success");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};
