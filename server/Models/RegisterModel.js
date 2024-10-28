const mongoose = require("mongoose");

const RegisterEventSchema = new mongoose.Schema({
  eventId: String,
  regid: String,
  EventName: String,
  UserName: String,
  teamName: String,
  total: Number,
  buyerId: String,
  date: String,
  location: String,
  subEvent: [String],
  img: String,
  payment: {
    type: Boolean,
    default: false,
  },
});

const RegEventModel = mongoose.model("RegisterEvent", RegisterEventSchema);
module.exports = RegEventModel;
