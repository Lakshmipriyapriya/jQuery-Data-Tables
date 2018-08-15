var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var index = require('./routes/index');
var routes=require('./routes/tasks');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',index);
app.use('/task',routes)
app.use('/admin', function(req, res){
  res.send({"welcome":"all"});
})
app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
var db = require('./db/index');
module.exports = app;
