var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chapter1', function(req, res, next) {
  res.render('chapter1/index.njk');
});


module.exports = router;
