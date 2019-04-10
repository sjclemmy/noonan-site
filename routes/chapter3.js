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
    title: 'Salford locations: map',
    image: 'images/Salford - noonan main sites.jpg'
  }, {
	title: 'SE Manchester locations: map',
	image: 'images/SE Manchester locations.jpg',
  }, {
    title: 'Ireland locations: map',
    image: 'images/Ireland counties and parishes.jpg'
  }
]

/* GET home page. */
router.get('/chapter3', function (req, res, next) {
  res.render('chapter3/index.njk', {
    quickLinks: links
  });
});


module.exports = router;
