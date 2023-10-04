const mongoose = require("mongoose")
require('dotenv').config();


const connectDatabase = async () => {
  mongoose.set('strictQuery', false);

  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  console.log("MongoDB Connection Successfully");
};

module.exports = connectDatabase;

