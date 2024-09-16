const express = require("express");
const uploadDrawing = require("../controller/uploadDrawing");
const getAllDrawing = require("../controller/getAllDrawing");
const deleteDrawing = require("../controller/deleteDrawing");
const searchById = require("../controller/searchById");
const updateDrawing = require("../controller/updateDrawing");
const gategoryWiseDrawing = require("../controller/gategoryWiseDrawing");
const latestDrawing = require("../controller/latestDrawing");
const uploadSample = require("../controller/sample/uploadSample");
const getSampleDrawing = require("../controller/sample/getSampleDrawing");
const router = express.Router();

//uploadDrawing
router.post("/upload-drawing", uploadDrawing);
//Get all drawing items
router.get("/allDrawing", getAllDrawing);

//Latest drawing items
router.get("/latest", latestDrawing);

//delete drawing items
router.post("/delete", deleteDrawing);

//search drawing items
router.post("/search", searchById);

//update drawing items
router.post("/update", updateDrawing);

//categoryWise drawing
router.post("/category", gategoryWiseDrawing);

//sample
router.post("/upload-sample", uploadSample);
router.get("/sample", getSampleDrawing);

module.exports = router;
