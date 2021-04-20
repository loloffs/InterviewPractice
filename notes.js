var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// breaking down lines 5, 6, and 7:

// line 5 part 1: router.get('/'  will be invoked whenever an HTTP GET 
// request with this specific pattern is detected.

// line 5 part 2, 6, 7: 
//  ...function(req, res, next) {
  // res.send('respond with a resource');
// });
// this is the callback that is invoked whenever the above pattern/filepath 
// is "hit" (used, etc.) in the url 






// from mdn: 

// The route defines a callback that will be invoked whenever an HTTP GET 
// request with the correct pattern is detected. The matching pattern is the 
// route specified when the module is imported ('/users') plus whatever is 
// defined in this file ('/'). In other words, this route will be used when 
// a URL of /users/ is received.