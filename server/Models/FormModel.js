const mongoose = require("mongoose");

const SubFormSchema = new mongoose.Schema(
  {
    // Define the structure of your subform fields here
    // For example, if each subform has a title and description, you might define it like this:
    subEvent: String,
    date: String,
    time: String,
    price: String,
    category: String,
  },
  {
    _id: false, // Optional: Exclude the automatic `_id` field from subdocuments if you don't need it
  }
);

const MainFormSchema = new mongoose.Schema({
  // Fields for the main form
  title: String,
  about: String,
  summery: String,
  entryfee: String,
  eventday: String,
  eventdate: String,
  location: String,
  imageurl: String,
  creatorId: String,
  contact: Number,
  userId: {
    type: String,
  },

  // Embed an array of subforms
  subForms: [SubFormSchema],
});

const MainFormModel = mongoose.model("MainForm", MainFormSchema);

module.exports = MainFormModel;
