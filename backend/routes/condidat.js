const express = require("express");
const { condidatRegister, getCondidats, uploadOptions } = require("../controllers/condidat");


const condidatRoutes = express.Router();

condidatRoutes.post("/register", uploadOptions.single("image"), condidatRegister);
condidatRoutes.get("/getCondidat", getCondidats);


module.exports = condidatRoutes;
