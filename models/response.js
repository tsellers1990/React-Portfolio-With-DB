const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  who: { type: String, required: true },
  what: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const response = mongoose.model("response", responseSchema);

module.exports = response;
