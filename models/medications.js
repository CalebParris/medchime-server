const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MecicationSchema = new Schema({
  name: {
    type: String,
  },
  instructions: {
    type: String,
  },
});

const Medication = mongoose.model("Medication", MecicationSchema);

module.exports = Medication;
