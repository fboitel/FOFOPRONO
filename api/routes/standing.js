var express = require('express');
var router = express.Router();

var t = {score: [1, 3, 4, 5, 6]};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(t);
});

module.exports = router;
