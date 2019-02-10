var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chapter3', function(req, res, next) {
  res.render('chapter3/index.njk');
});


module.exports = router;
