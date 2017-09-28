// Pull in require dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// creating a PORT on which our server will run 
var port = process.env.PORT || 3000;

// initializing Express
var app = express();

// server stataic content from the public directory 
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

// Overriding POST
app.use(methodOverride("_method"));

// set hadlebars as the view engine 
var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them 
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);