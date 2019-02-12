var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chapter7', function(req, res, next) {
  res.render('chapter7/index.njk');
});


module.exports = router;
