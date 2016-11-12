

var genStr = function(length) {
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < length; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
};

module.exports = {
    genStr: genStr
};