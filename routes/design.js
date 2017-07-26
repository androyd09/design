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
        page:'index',
        site:'green'
    });
});
router.get('/green/index', function (req, res, next) {
    res.render('design/green/index', {
        title: 'green',
        page:'index',
        site:'green'
    });
});
router.get('/green/about', function (req, res, next) {
    res.render('design/green/about', {
        title: 'green-about',
        page:'about',
        site:'green'
    });
});
router.get('/green/content', function (req, res, next) {
    res.render('design/green/content', {
        title: 'green-content',
        page:'content',
        site:'green'
    });
});
// end green site




module.exports = router;
