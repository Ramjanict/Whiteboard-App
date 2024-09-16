const mongoose = require("mongoose");

const smapleSchema = new mongoose.Schema(
  {
    imageUrl: String,
    category: String,
    fontSize: String,
    text: String,
    id: Number,
  },
  {
    timestamps: true,
  }
);
const sampleModel = mongoose.model("sample", smapleSchema);
module.exports = sampleModel;
