
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const condidat = require("../models/condidat");

const multer = require("multer");

const FILE_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
};
//DiskStorage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error("Invalid Image Type");
        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, "public/uploads");
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(" ").join("-");
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

exports.uploadOptions = multer({ storage: storage });

exports.condidatRegister = async (req, res) => {

    try {
        const found = await condidat.findOne({ email: req.body.email });

        if (found) {
            return res.status(400).send("user already exist");
        }
        salt = 10;
        
        const file = req.file;
        if (!file) return res.status(400).send("No image in the request");

        const fileName = file.filename;

        const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
        const hashpassword = bcrypt.hashSync(req.body.password, salt);
        const newCondidat = new condidat({
            email: req.body.email,
            name: req.body.name,
            password: hashpassword,
            sex: req.body.sex,
            experence: req.body.experence,
            country: req.body.country,
            image: `${basePath}${fileName}`,
            category: req.body.category
        });
        await newCondidat.save();
        res.status(200).send({ msg: "user added successfully" });
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
            email: user.email,
            name: user.name,
        };
        const token = jwt.sign(payload, process.env.SECRETKEY);
        res.status(200).send({ msg: "user login successfully", founduser, token });
    } catch (error) {
        res.status(500).send("server error");
    }
};
exports.getCondidats = async (req, res) => {
    try {
        const condidats = await condidat.find();
        res.status(200).send({ condidats });
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
