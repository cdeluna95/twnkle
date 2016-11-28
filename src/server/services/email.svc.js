var nodemailer = require( 'nodemailer' );

var getTransport = function() {
    return nodemailer.createTransport( 'smtps://dnrtwinkle@gmail.com:Dr.TacksooIm@smtp.gmail.com' );
};

var sendMail = function( transporter, mailOptions ) {
    transporter.sendMail( mailOptions, function( err, info ) {

    } )
};

var sendVerificationEmail = function( token, cb ) {
    var transport = getTransport();

    var mailOptions = {
        from: '',
        to: '',
        subject: 'Verify Your Twnkle Account',
        test: 'Please click the link below'
    };

    sendMail( transport, mailOptions, function( err, info ) {
        if( err ) {

        }
    } );
};

module.exports = {
    sendVerificationEmail: sendVerificationEmail
};