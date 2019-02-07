var express = require('express')
var router = express.Router()

var chapter1 = require('./chapter1')
var chapter2 = require('./chapter2')

router.use(chapter1)
router.use(chapter2)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('chapter1')
})

module.exports = router
