const drawingModel = require("../model/drawingModel");

const deleteDrawing = async (req, res) => {
  try {
    const deleteDraw = req.body.id;
    const drawing = await drawingModel.deleteOne({ _id: deleteDraw });

    res.status(201).json({
      message: "Delete drawing successfully",
      error: false,
      success: true,
      data: drawing,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = deleteDrawing;
