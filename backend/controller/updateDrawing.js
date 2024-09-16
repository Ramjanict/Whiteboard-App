const drawingModel = require("../model/drawingModel");

const updateDrawing = async (req, res) => {
  try {
    const { _id, ...resBody } = req.body;
    console.log("doododod", resBody);
    const update = await drawingModel.findByIdAndUpdate(_id, resBody);

    res.status(201).json({
      message: "Update drawing successfully",
      error: false,
      success: true,
      data: update,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = updateDrawing;
