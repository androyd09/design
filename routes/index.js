var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'SAL Design',
        page: 'home'
    });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('about', {
        title: 'SAL Design',
        page: 'about'
    });
});

/*Get timer test*/
router.get('/selfdefence', function(req,res,next) {
    res.render('defence',{});
});

module.exports = router;
