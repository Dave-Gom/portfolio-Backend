const express = require("express");
const cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT || 5000);
const corOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

//middlewares
app.use(cors(corOptions));
app.use(express.json());

//routes
app.use("/api/mi-info", require("./routes/mi-info"));

module.exports = app;
