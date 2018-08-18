var Task = require('../../models/task');
var logger=require('winston')
var createMyTaskDetails= function (req, res) {
	var tasks = new Task({
			title : req.body.title ,
			 description : req.body.description,
			 status : req.body.status
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
 exports.createMyTaskDetails=createMyTaskDetails

