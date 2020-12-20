const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  date: {
    type: String,
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
  deviceId: {
    type: String,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
