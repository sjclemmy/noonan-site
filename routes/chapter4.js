var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chapter4', function(req, res, next) {
  res.render('chapter4/index.njk');
});


module.exports = router;
