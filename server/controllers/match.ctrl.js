var util = require('util');

var MatchSvc = require('../services/match.svc');
var matchSvc = new MatchSvc();

var getMatches = function(req, res) {
    var userId = req.params.userId;

    matchSvc.getUsers(userId, function(err, results) {
        if(err) {
            return res.status(400).json({ err: err });
        }

        res.status(200).json({ data: results });
    });
};

module.exports = exports = {
    getMatches: getMatches
};