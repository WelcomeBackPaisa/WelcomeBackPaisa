<<<<<<< 620fd9883c5399e7929712512dba1c53998074bc
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('../database/index.js');

app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../client/dist'));


 //GET request routes
 app.get("/home", route.getAllThreads)

 app.get("/individualThread", route.getIndividualThread)

 app.get('/aboutUs', route.renderAboutUs)

 module.exports = app;
=======
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
>>>>>>> rearrange files on server
