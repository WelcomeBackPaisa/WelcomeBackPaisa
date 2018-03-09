const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

//GET request routes
app.get("/forum", route.getThread)

app.get("/post/:id", route.getResponse)

//POST request routes
app.post("/forum", route.postThread)

app.post("/post/:id", route.postResponse)

module.exports = app;
