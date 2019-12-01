const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date().getTime()
  },
  description: {
    type: String,
    default: ""
  },
  isCompleted: {
    type: Boolean,
    default: true
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
