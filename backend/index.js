const express = require("express");

const connectDb = require("./config/connectDb");
const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const condidatRoutes = require("./routes/condidat");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const path = require("path");
connectDb();

app.use(express.json());


app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/condidat", condidatRoutes);
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "/public/uploads"))
);
app.listen(process.env.PORT, () => {
  console.log(`your server connected on ${process.env.PORT}`);
});
