var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var Task=new Schema({
	 title:  { 
	type: String,
	index: true
  },
  description:  { 
	type: String,
	index: true
  },
  status:  { 
	type: String,
	index: true
  },
   createdOn:  { 
	type: Date,
	default: Date.Now	
  }
});
module.exports= mongoose.model('Task',Task);