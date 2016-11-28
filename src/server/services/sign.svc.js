
var SignSvc = (function() {
    function SignSvc() {
        
    }
    
    SignSvc.prototype.getSigns = function(dob, cb) {
        //parse out year
        var year;
        var month;
        
        var easternSign = this._getEasternSign(year);
        var westernSign = this._getWesternSign(month);
        
        cb(null, {
            easternSign: easternSign,
            westernSign: westernSign
        });
    };
    
    SignSvc.prototype._getEasternSign = function(year) {
        
    };
    
    SignSvc.prototype._getWesternSign = function(month) {
        
    };
    
    return SignSvc;
}());

module.exports = exports = SignSvc;