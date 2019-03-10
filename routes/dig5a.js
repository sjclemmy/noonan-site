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
	title: 'Corcoran side family diagram',
    image: 'images/Corcoran Tree.jpg' 
	}, {
    title: 'Map of main sites in SE Manchester',
    image: 'images/SE Manchester locations.jpg'
  }, {
    title: 'Locations, counties & Catholic parishes in Ireland',
    image: 'images/Ireland counties and parishes.jpg'
  }
]

/* GET home page. */
router.get('/dig5a', function (req, res, next) {
  res.render('dig5a/index.njk', {
    quickLinks: links
  });
});

module.exports = router;

