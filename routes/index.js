var express = require('express');
var router = express.Router();
router.get('/data', function(request, response, next) {
	response.writeHead(302, {
	  'Location': '/Task-List.html'
	});
	response.end();
});
router.post('/postTask',function(req,res){
	res.send('saved');
}); 

module.exports = router;
