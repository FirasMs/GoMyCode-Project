const mongoose = require("mongoose");

const condidatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sex: { type: String },
    experence: { type: Number },
    country: { type: String },
    image: { type: String },
    category:{type:String}
});
module.exports = mongoose.model("Condidat", condidatSchema);
