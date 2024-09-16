const drawingModel = require("../model/drawingModel");

const getAllDrawing = async (req, res) => {
  const allDrawing = await drawingModel.find();

  try {
    res.status(201).json({
      message: "Get all drawing",
      error: false,
      success: true,
      data: allDrawing,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getAllDrawing;
