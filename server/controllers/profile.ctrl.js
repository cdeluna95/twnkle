var util       = require('util');
var ProfileSvc = require('../services/profile.svc');


var getProfileById = function (req, res) {
    util.log('inside get profile');
    var id = req.params.userId;
    util.log('id = ' + id);

    ProfileSvc.findById(id, function (err, result) {
        if (err) {
            return res.status(401).json({err: err});
        }

        res.status(200).json({data: result});
    });
};

module.exports = exports = {
    getProfileById: getProfileById
};