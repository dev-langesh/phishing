const express = require("express");
const app = express();
const path = require("path");
const { connectDb } = require("./lib/connect");
const { User } = require("./models/user.model");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./view"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "view", "index.html");

  return res.sendFile(filePath);
});

app.post("/", async (req, res) => {
  const usr = await User.create(req.body);

  console.log(usr);

  res.send({ message: "success" });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
