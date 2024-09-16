const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/Database");
const router = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

//app router
app.use("/api", router);

//connect database then server running
const PORT = 8080 || process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("successfully connected to MongoDB");
    console.log(`The Server is Successfully run at ${PORT}`);
  });
});
