var Task = require('../../models/task');
var logger=require('winston');
var _ = require('underscore');
var idForOperation ;
var createMyTaskDetails= function (req, res) {
	var tasks = new Task({
			title : req.body.title ,
			 description : req.body.description,
			 status : req.body.status,
			 createdOn:req.body.createdOn
		});
		
	return tasks.save(function (err) {
		if (!err) {
			logger.info("Task details created");
			return res.json({
				stausCode : 200,
				Task:tasks
			});
		} else {
			logger.error(err);
			if (err.name == 'ValidationError') {
				res.json({
					statusCode : 400,
					error : 'Validation error'
				});
			} else {
				res.json({
					statusCode : 500,
					error : 'API Server error'
				});
			}
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
}
var getMyTaskDetails = function (req, res) {
	logger.info("GET all tasks");
	return Task.find(function (err, task) {
		if (!err) {
			 return res.send(task);
			
		} else {
			res.statusCode = 500;
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
			 res.json({
				error : 'Server error'
			});
		}
	});
}
var getMyTaskDetailsInArray = function (req,res){
	return Task.find(function(error,tasks){
		idForOperation = tasks._id;
		var getDataFromDb=tasks.map (function getAllDetails(tasks,index){
			var taskData=[tasks.title,tasks.description,tasks.status,tasks.createdOn];
			return taskData;
		});

		var getDataFromDataTable = {
			draw:1,
			recordsTotal: tasks.length,
			recordsFiltered: tasks.length, 
			data:getDataFromDb
		}
      console.log("TaskList created", getDataFromDataTable);
      res.send(getDataFromDataTable);	
	})
		
 }
 exports.getMyTaskDetailsInArray=getMyTaskDetailsInArray
 exports.getMyTaskDetails=getMyTaskDetails
 exports.createMyTaskDetails=createMyTaskDetails
