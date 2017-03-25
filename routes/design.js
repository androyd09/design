var express = require('express');
var router = express.Router();

/* GET design page. */
router.get('/', function (req, res, next) {
    res.render('design/index', {
        title: 'Site Design Index',
        stylesheet: 'indices',
        page: 'design'
    });
});


/* Get greens site */
router.get('/green', function (req, res, next) {
    res.render('design/green/index', {
        title: 'green',
        stylesheet: 'design/green',
        page:'index',
        site:'green'
    });
});
router.get('/green/index', function (req, res, next) {
    res.render('design/green/index', {
        title: 'green',
        stylesheet: 'design/green',
        page:'index',
        site:'green'
    });
});
router.get('/green/about', function (req, res, next) {
    res.render('design/green/about', {
        title: 'green-about',
        stylesheet: 'design/green',
        page:'about',
        site:'green'
    });
});
router.get('/green/content', function (req, res, next) {
    res.render('design/green/content', {
        title: 'green-content',
        stylesheet: 'design/green',
        page:'content',
        site:'green'
    });
});
// end green site




module.exports = router;
