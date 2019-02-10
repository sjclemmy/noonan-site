var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dig3a', function(req, res, next) {
  res.render('dig3a/index.njk');
});


module.exports = router;
