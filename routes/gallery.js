var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('gallery', {
        page: 'gallery'
    });
});

router.use('/site', require('./design'));



module.exports = router;
