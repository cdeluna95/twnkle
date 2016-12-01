var multer = require('multer');
var upload = multer({ dest: 'uploads/'});

var queue = [];

process.on('photo:upload', function(path) {

});

process.on('exit', function() {
    console.log('child process exited');
});