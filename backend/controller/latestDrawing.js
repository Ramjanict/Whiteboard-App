const drawingModel = require("../model/drawingModel");

const latestDrawing = async (req, res) => {
  const latestDrawing = await drawingModel.find().sort({ createdAt: -1 });
  try {
    res.status(201).json({
      message: "latestDrawing",
      error: false,
      success: true,
      data: latestDrawing,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = latestDrawing;
