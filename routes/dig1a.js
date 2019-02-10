var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dig1a', function(req, res, next) {
  res.render('dig1a/index.njk');
});


module.exports = router;
