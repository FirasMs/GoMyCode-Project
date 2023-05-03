const contact = require("../models/contact");
exports.createcontact = async (req, res) => {
  const { email, objet, comentaire } = req.body;
  try {
    res.status(200).send({ msg: "contact created successfully" });
  } catch (error) {
    res.status(500).send("server error");
  }
};
