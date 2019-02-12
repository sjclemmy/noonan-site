var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chapter5', function(req, res, next) {
  res.render('chapter5/index.njk');
});


module.exports = router;
