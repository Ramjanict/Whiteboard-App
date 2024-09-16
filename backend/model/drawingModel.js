const mongoose = require("mongoose");

const drawingSchema = new mongoose.Schema(
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
const drawingModel = mongoose.model("drawing", drawingSchema);
module.exports = drawingModel;
