"use strict";

let express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  path = require("path"),
  http = require("http"),
  app = express();

mongoose.connect("mongodb://localhost/easeMyCart", { useNewUrlParser: true });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Require all routes here
let routes = require("./routes");
let about = require("./routes/about");
let ProductsAPI = require("./routes/api/productsAPI");

//Use all routes here
app.use(routes);
app.use(about);
app.use(ProductsAPI);

//Listening on port 3000
app.listen(8080, () => {
  console.log("Backend Server started on port 8080");
});
