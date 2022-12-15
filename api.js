const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", require("./routes/V1/auth"));
app.use("/users", require("./routes/V1/users"));
app.use("/cart", require("./routes/V1/cart"));
mongoose.set("strictQuery", false);

//Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("MongoDB Connected...")
);

//start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
