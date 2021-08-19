//jshint esversion:6
 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
 
const app = express();
 
app.set('view engine', 'ejs');
 
app.use(bodyParser.urlencoded({ 
  extended: true
}));
app.use(express.static("public"));


app.get('/', (req, res) => {

  res.send('home')

});

app.get('/login', (req, res) => {

  res.send('login')

});
app.get('/register', (req, res) => {

  res.send('register')

});








app.listen(3000, function() {
  console.log("Server has started successfully!");
});
