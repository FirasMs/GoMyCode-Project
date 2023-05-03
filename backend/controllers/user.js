const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../middleware/sendMail");
exports.userRegister = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await user.findOne({ email: email });
    console.log(found);
    if (found) {
      return res.status(400).send("user already exist");
    }
    const newUser = new user(req.body);
    salt = 10;
    const hashpassword = bcrypt.hashSync(password, salt);
    newUser.password = hashpassword;
    const payload = {
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    };
    const token = jwt.sign(payload, process.env.SECRETKEY);

    await newUser.save();
    res.status(200).send({ msg: "user added successfully", newUser, token });
  } catch (error) {
    res.status(500).send("could not ad user");
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const founduser = await user.findOne({ email: email });

    if (!founduser) {
      return res.status(400).send("email or pass");
    }
    const match = await bcrypt.compareSync(password, founduser.password);

    if (!match) {
      return res.status(400).send("email or password error");
    }
    const payload = {
      id: user._id,
      email: email,
      name: user.name,
    };
    const token = jwt.sign(payload, process.env.SECRETKEY);
    res.status(200).send({ msg: "user login successfully", founduser, token });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send({ msg: "get users success", users });
  } catch (error) {
    res.status(500).send("could not get users");
  }
};
exports.deleteUsers = async (req, res) => {
  try {
    const deleteuser = await user.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user deleted", deleteuser });
  } catch (error) {
    res.status(500).send("user could not deleted");
  }
};
exports.updateUsers = async (req, res) => {
  try {
    const updateuser = await user.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    // console.log(req.body);
    res.status(200).send({ msg: "user updated", updateuser });
  } catch (error) {
    res.status(500).send("user could not updated");
  }
};
exports.getoneUser = async (req, res) => {
  try {
    const getoneuser = await user.findOne({ id: req.params.id });
    console.log(getoneuser);
    res.status(200).send({ msg: "user finded by name", getoneuser });
  } catch (error) {
    res.status(500).send("user not finded");
  }
};


/**
 * 
 */
exports.sendMail =async (req, res) => {
  const emailUser = req.body.emailUser; 
  const mailTo = req.body.mailTo; 
  try{
    await sendMail(emailUser, mailTo)
    res.status(200).send("Mail Sended");
  }
  catch(err){
    res.status(500).send({msg:err})
  }
}