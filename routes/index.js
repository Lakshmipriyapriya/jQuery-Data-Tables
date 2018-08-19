var express = require('express');
var router = express.Router();
var tasks=require('../src/resources/tasks_operations');
router.get('/', function(request, response, next) {
	response.writeHead(302, {
	  'Location': '/Task-List.html'
	});
	response.end();
});
router.post('/',function(req,res,next){
	var data=req.body;
  	 tasks.createMyTaskDetails(req,res)
  	 });
router.get('/all',function(req,res){
	tasks.getMyTaskDetails(req,res);
});
router.get('/allInArray',function(req,res){
	tasks.getMyTaskDetailsInArray(req,res);
});
module.exports = router;
