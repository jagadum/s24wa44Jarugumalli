var express = require('express');
var router = express.Router();

// Initialize variables
var product = 1;
var factor = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Increment factor and multiply product
  factor++;
  product *= factor;

  // Send response with updated product value
  res.send(`Product is: ${product}`);
});

module.exports = router;
