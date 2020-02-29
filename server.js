var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
require('dotenv').config()

console.log(process.env.PORT);

var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var routes = require("./controllers/burger_controller.js");
app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
