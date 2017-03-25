var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        page: 'gallery'
    });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('about', {
        page: 'about'
    });
});

module.exports = router;