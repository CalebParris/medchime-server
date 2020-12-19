const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  deviceId: {
    type: String,
  },
  medications: [{ type: Schema.Types.ObjectId, ref: "Medication" }],
  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
