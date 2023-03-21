const mongoose = require("mongoose");

async function connectDb() {
  const conn = await mongoose.connect(process.env.MONGO_URI);
}

module.exports = { connectDb };
