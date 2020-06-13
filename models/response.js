const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const response = mongoose.model("response", responseSchema);

module.exports = response;
