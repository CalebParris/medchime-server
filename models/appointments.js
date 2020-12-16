const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
  doctor: {
    type: String,
  },
  location: {
    type: String,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
