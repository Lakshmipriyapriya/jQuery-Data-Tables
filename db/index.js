var mongoose = require('mongoose')
var config = require('config')
var dbURL = config.dbServer.protocol + config.dbServer.host + ":"+config.dbServer.port + "/" + config.dbServer.dbName
mongoose.connect( dbURL , function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});