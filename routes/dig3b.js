var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dig3b', function(req, res, next) {
  res.render('dig3b/index.njk');
});


module.exports = router;
