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

  let powResult = Math.pow(x, y);
  let signResult = Math.sign(x);
  let tanhResult = Math.tanh(x);
  let truncResult = Math.trunc(x);

  let response = `
    Math.pow() applied to ${x} and ${y} is ${powResult}<br>
    Math.sign() applied to ${x} is ${signResult}<br>
    Math.tanh() applied to ${x} is ${tanhResult}<br>
    Math.trunc() applied to ${x} is ${truncResult}<br>
  `;

  res.send(response);
});

module.exports = router;
