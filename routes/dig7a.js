var express = require('express');
var router = express.Router();


const links = [
  {
    title: 'Down the Arches, with annotations',
    image: 'images/DtA for thumbnail.jpg',
    link: 'images/DtA - Annotated.pdf'
  }, {
    title: 'Noonan side family diagram',
    image: 'images/James-Anty tree.jpg'
  }, {
    title: 'Ireland locations: map',
    image: 'images/Ireland counties and parishes.jpg'
  },  {
    title: 'Master map page',
    link: './maps'
  }
]

/* GET home page. */
router.get('/dig7a', function (req, res, next) {
  res.render('dig7a/index.njk', {
    quickLinks: links
  });
});

module.exports = router;

