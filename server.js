const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

var routes = require("./controllers/controllers.js");
app.use(routes);

app.listen(PORT, () => {
  console.log('Server listening on: ' + PORT);
});