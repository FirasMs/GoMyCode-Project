const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  objet: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  comentaire: { type: String, required: true, max: 255, min: 10 },
});
module.exports = mongoose.model("contact", contactSchema);
