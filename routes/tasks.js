var express=require('express');
var request = require('request');
var router = express.Router();
router.get('/hai', function(req, res, next) {
  res.send('Welcome to user ');
});
var tasks=require('../src/resources/tasks_operations');
router.post('/',function(req,res,next){
  	 tasks.createMyTaskDetails(req,res);
  	 });
router.get('/all',function(req,res){
	tasks.getMyTaskDetails(req,res);
});
module.exports =router;