const drawingModel = require("../model/drawingModel");

const searchById = async (req, res) => {
  try {
    const { id } = req.body;

    if (id > 1) {
      const searchData = await drawingModel.findOne({ id });

      res.status(201).json({
        message: "result",
        error: false,
        success: true,
        data: searchData,
      });
    } else {
      const searchData = await drawingModel.find();

      res.status(201).json({
        message: "result",
        error: false,
        success: true,
        data: searchData,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = searchById;
