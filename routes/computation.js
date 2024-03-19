var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  let x = req.query.x;

  
  if (x) {
    x = parseFloat(x);
  } else {
    
    x = Math.floor(Math.random() * 10) + 1;
  }

  
  let y = req.query.y;

  
  if (y) {
    y = parseFloat(y);
  } else {

    y = Math.floor(Math.random() * 10) + 1;
  }

  let result = Math.pow(x, y);

  let response = `Math.pow() applied to ${x} and ${y} is ${result}`;

  res.send(response);
});

module.exports = router;
