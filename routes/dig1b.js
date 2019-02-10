var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dig1b', function(req, res, next) {
  res.render('dig1b/index.njk');
});


module.exports = router;
