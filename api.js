const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", require("./routes/V1/auth"));
app.use("/user", require("./routes/V1/users"));
app.use("/order", require("./routes/V1/orders"));
app.use("/product", require("./routes/V1/products"));
app.use("/bundle",require("./routes/V1/bundles"));
app.use("/admin", require("./routes/V1/admin"));


mongoose.set("strictQuery", false);

//if process.env.DB_CONNECTION is empty print error
if (!process.env.DB_CONNECTION) {
  console.log("Error: DB_CONNECTION is not set");
  process.exit(1);
}


//Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  
).then(()=>{
  console.log("Connected to database");
}).catch(err => console.log(err))

//start server
app.listen(port, () => {
  console.log("Server started on port "+ port);
});
