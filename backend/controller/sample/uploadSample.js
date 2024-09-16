const sampleModel = require("../../model/sampleModel");

const uploadSample = async (req, res) => {
  try {
    const drawing = new sampleModel(req.body);
    const saveDrawing = await drawing.save();
    res.status(201).json({
      message: "Drawing upload successfully",
      error: false,
      success: true,
      data: saveDrawing,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = uploadSample;
