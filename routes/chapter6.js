var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chapter6', function(req, res, next) {
  res.render('chapter6/index.njk');
});


module.exports = router;
