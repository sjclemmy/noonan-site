var express = require('express');
var router = express.Router();


const links = [
  {
    title: 'Down the Arches of the Years by Jim Noonan',
    image: 'images/DtA for thumbnail.jpg',
    link: 'images/DtA - Annotated.pdf'
  }, {
    title: 'Noonan side family diagram',
    image: 'images/James-Anty tree.jpg'
  }, {
    title: 'Map of main sites in Salford',
    image: 'images/Salford - noonan main sites.jpg'
  }, {
    title: 'Irish counties and parishes map',
    image: 'images/Ireland counties and parishes.jpg'
  }
]

/* GET home page. */
router.get('/chapter5', function(req, res, next) {
  res.render('chapter5/index.njk', {
    quickLinks: links
  });
});


module.exports = router;
