var util = require('util');


/**
 * TODO need error handling
 * TODO need to move if statement to a switch statement
 *
 */
var SignSvc = (function () {
    function SignSvc() {
    }

    SignSvc.prototype.getSigns = function (dob, cb) {
        if(typeof dob !== typeof new Date())
            dob = new Date(dob);
        util.log(dob.toString());
        var year = dob.getFullYear();
        var month = dob.getUTCMonth();
        var day = dob.getDate();

        util.log(year);

        var easternSign = this._getEasternSign(year);
        var westernSign = this._getWesternSign(month, day);

        cb(null, {
            easternSign: easternSign,
            westernSign: westernSign
        });
    };

    SignSvc.prototype._getEasternSign = function (year) {
        return year % 12;
    };

    SignSvc.prototype._getWesternSign = function (month, day) {
        var sign = null;
        util.log("month = " + month);
        util.log("day = " + day);
        //capricorn
        if((month == 11) && ( day>= 22) || (month == 0) && (day <= 19)) {
            return 0
        }else if((month == 0) && (day >= 20)  || (month == 1) && (day <= 18)) {
            return 1;
        } else if((month == 1) && (day >= 19)  || (month == 2) && (day <= 20)) {
            return 2;
        } else if((month == 2) && (day >= 21)  || (month == 3) && (day <= 19)) {
            return 3;
        } else if((month == 3) && (day >= 20)  || (month == 4) && (day <= 20)) {
            return 4;
        } else if((month == 4) && (day >= 21)  || (month == 5) && (day <= 20)) {
            return 5;
        } else if((month == 5) && (day >= 21)  || (month == 6) && (day <= 22)) {
            return 6;
        } else if((month == 6) && (day >= 23)  || (month == 7) && (day <= 22)) {
            return 7;
        } else if((month == 7) && (day >= 23)  || (month == 8) && (day <= 21)) {
            return 8;
        } else if((month == 8) && (day >= 22) || (month == 9) && (day <= 21)) {
            return 9;
        } else if((month == 9) && (day >= 24)  || (month == 10) && (day <= 22)) {
            return 10;
        } else if((month == 10) && (day >= 23)  || (month == 11) && (day <= 21)) {
            return 11;
        } else {
            return null;

        }
    };

    return SignSvc;
}());

module.exports = exports = SignSvc;