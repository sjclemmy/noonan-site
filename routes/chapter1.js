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
    title: 'Salford locations: map',
    image: 'images/Salford - noonan main sites.jpg'
  }, {
    title: '1840s Pendleton: map',
    image: 'images/1840s Pendleton.jpg'
  }, {
    title: '1890s Pendleton: map',
    image: 'images/1890s Pendleton.jpg'
  }, {
    title: 'Ireland locations: map',
    image: 'images/Ireland counties and parishes.jpg'
  },  {
    title: 'Master map page',
    link: './maps'
  }
 
]

/* GET home page. */
router.get('/chapter1', function (req, res, next) {
  res.render('chapter1/index.njk', {quickLinks: links});
});


module.exports = router;
