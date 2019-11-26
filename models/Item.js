const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  // priority: {
  //   type: String,
  //   required: true
  // },
  // description: {
  //   type: String,
  //   default: ""
  // }
});

module.exports = Item = mongoose.model("item", ItemSchema);
