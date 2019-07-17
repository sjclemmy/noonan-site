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
    title: 'Salford locations: map',
    image: 'images/Salford - noonan main sites.jpg'
  }, {
    title: '1840s Pendleton: map',
    image: 'images/1840s Pendleton.jpg'
  }, {
    title: '1890s Pendleton: map',
    image: 'images/1890s Pendleton.jpg'
  },  {
    title: 'Master map page',
    link: './maps'
  }
]

/* GET home page. */
router.get('/dig1a', function (req, res, next) {
  res.render('dig1a/index.njk', {
    quickLinks: links
  });
});

module.exports = router;

