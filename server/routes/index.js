var router = require('express').Router();
var path = require('path');

var indexPath = path.join(__dirname, '../views', 'index.html');

router.get('/', function(req, res) {
    res.sendFile(indexPath);
});

module.exports = router;
