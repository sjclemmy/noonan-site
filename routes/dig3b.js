var express = require('express');
var router = express.Router();

const links = [
  {
    title: 'Down the Arches, with annotations',
    image: 'images/DtA for thumbnail.jpg',
    link: 'images/DtA - Annotated.pdf'
  }, {
    title: 'Burgin side family diagram',
    image: 'images/Kate Burgin Tree.jpg'
  }, {
    title: 'Noonan side family diagram',
    image: 'images/James-Anty tree.jpg'
  }, {
    title: 'Map of main sites in Salford',
    image: 'images/Salford - noonan main sites.jpg'
  }, {
    title: 'Locations, counties & Catholic parishes in Ireland',
    image: 'images/Ireland counties and parishes.jpg'
  }
]
/* GET home page. */
router.get('/dig3b', function (req, res, next) {
  res.render('dig3b/index.njk', {
    quickLinks: links
  });
});


module.exports = router;


