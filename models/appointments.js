const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  doctor: {
    type: String,
  },
  location: {
    type: String,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
