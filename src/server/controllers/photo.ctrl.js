var util = require('util');
var fs = require('fs');

function uploadSingle(req, res) {
    console.log(req.files.image.path);

    res.status(200).json({ ok: true });
}

function uploadBatch(req, res) {

}

module.exports = exports = {
    uploadSingle: uploadSingle,
    uploadBatch: uploadBatch
};