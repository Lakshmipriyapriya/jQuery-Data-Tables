var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var Task=new Schema({
	 Title:  { 
	type: String,
	index: true
  },
  Description:  { 
	type: String,
	index: true
  },
  Status:  { 
	type: String,
	index: true
  },
   CreatedOn:  { 
	type: Date,
	default: Date.Now	
  }
});
module.exports= mongoose.model('Task',Task);