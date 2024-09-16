const drawingModel = require("../model/drawingModel");

const searchById = async (req, res) => {
  try {
    const { id } = req.body;
    let searchData = "";
    if (id > 1) {
      searchData = await drawingModel.findOne({ id });
    } else {
      searchData = await drawingModel.find();
    }
    res.status(201).json({
      message: "result",
      error: false,
      success: true,
      data: searchData,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = searchById;
