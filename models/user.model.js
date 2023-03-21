const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: String,
  password: String,
});

const model = mongoose.model("user", schema);

module.exports = { User: model };
