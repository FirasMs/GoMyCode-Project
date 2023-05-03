const express = require("express");
const {
  userRegister,
  getoneUser,
  deleteUsers,
  updateUsers,
  getUsers,
  login,
  sendMail
} = require("../controllers/user");
const { Auth } = require("../middleware/Auth");
const {
  RegisterValidation,
  Validation,
  LoginValidation,
} = require("../middleware/validation");

const userRoutes = express.Router();

userRoutes.post("/register", RegisterValidation, Validation, userRegister);
userRoutes.post("/login", LoginValidation, Validation, login);

userRoutes.get("/getuser", getUsers);

userRoutes.delete("/delete/:id", deleteUsers);

userRoutes.put("/update/:id", updateUsers);
userRoutes.get("/getoneuser/:name", getoneUser);
userRoutes.post("/sendMail", sendMail)

userRoutes.get("/current", Auth, (req, res) => {
  res.send({ user: req.user });
});

module.exports = userRoutes;
