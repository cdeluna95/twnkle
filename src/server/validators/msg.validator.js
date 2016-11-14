var util = require('util');
var _ = require('lodash');


var validateBody = function(body) {
    if(_.isNull(body) || _.isUndefined(body))
        return "Message body required";
    if(!_.isString(body))
        return "Message body must be a string";
    if(body.length <= 0)
        return "Message body required";

    return null;
};

var validateReceiver = function(to) {
    if(_.isNull(to) || _.isUndefined(to))
        return "Message receiver required";
    if(!_.isString(to))
        return "Message receiver must be a string";
    if(to.length <= 0)
        return "Message receiver required";

    return null;
};

var validateSender = function(from) {
    if(_.isNull(from) || _.isUndefined(from))
        return "Message sender required";
    if(!_.isString(from))
        return "Message sender must be a string";
    if(from.length <= 0)
        return "Message sender required";

    return null;
};

var validate = function(msg, cb) {
    var bodyErr, toErr, fromErr;
    var errs = [];

    if((bodyErr = validateBody(msg.body)) != null)
        errs.push(bodyErr);
    if((toErr = validateReceiver(msg.receiver)) != null)
        errs.push(toErr);
    if((fromErr = validateSender(msg.sender)) != null)
        errs.push(fromErr);

    if(errs.length > 0)
        return cb(errs, null);

    cb(null, msg);
};

module.exports = {
    validate: validate
};