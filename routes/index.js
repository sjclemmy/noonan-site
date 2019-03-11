var express = require('express')
var router = express.Router()

var chapter1 = require('./chapter1')
var chapter2 = require('./chapter2')
var chapter3 = require('./chapter3')
var chapter4 = require('./chapter4')
var chapter5 = require('./chapter5')
var chapter6 = require('./chapter6')
var chapter7 = require('./chapter7')
var dig1a = require('./dig1a')
var dig1b = require('./dig1b')
var dig3a = require('./dig3a')
var dig3b = require('./dig3b')
var dig7a = require('./dig7a')
var dig7b = require('./dig7b')

router.use(chapter1)
router.use(chapter2)
router.use(chapter3)
router.use(chapter4)
router.use(chapter5)
router.use(chapter6)
router.use(chapter7)
router.use(dig1a)
router.use(dig1b)
router.use(dig3a)
router.use(dig3b)
router.use(dig7a)
router.use(dig7b)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('chapter1')
})

module.exports = router
