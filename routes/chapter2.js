var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chapter2', function(req, res, next) {
  res.render('chapter2/index.njk');
});


module.exports = router;
