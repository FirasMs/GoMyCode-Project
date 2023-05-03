const express = require("express");
const { createcontact } = require("../controllers/contact");

const contactRoutes = express.Router();

contactRoutes.post("/create", createcontact);

module.exports = contactRoutes;
