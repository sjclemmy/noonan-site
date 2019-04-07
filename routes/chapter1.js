var express = require('express');
var router = express.Router();


const links = [
  {
    title: 'Down the Arches, with annotations',
    link: 'images/DtA - Annotated.pdf'
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
router.get('/chapter1', function (req, res, next) {
  res.render('chapter1/index.njk', {quickLinks: links});
});


module.exports = router;
