const mongoose = require("mongoose");
require("dotenv").config();

connection_status = false;

const connectDB = async (uri) => {
  try {
    const connection = await mongoose.connect(uri);
    console.log(`Database connected successfully ✅ : ${connection.connection.host}`);
    return (connection_status = true);
  } catch (error) {
    console.error("Database connection error ❌:", error);
    return connection_status;
  }
};

module.exports = connectDB;
