/**
 * Use this section if you want to save your data to MongoDB.
 */
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connection Succesful");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
