var nodemailer = require( 'nodemailer' );

var SERVER_EMAIL = 'dnrtwinkle@gmail.com';

var EmailSvc = (function() {
    function EmailSvc() {
          
    }
    
    EmailSvc.prototype.__getTransport = function() {
        return nodemailer.createTransport('smpts://dnrtwinkle@gmail.com:Dr.TacksooIm@smtp.gmail.com');
    };
    
    EmailSvc.prototype.__sendMail = function(transporter, mailOptions, cb) {
        
    };
    
    EmailSvc.prototype.sendVerificationEmail = function(user, token, cb) {
        var transporter = this.__getTransport();
        
        var mailOptions = {
            from: SERVER_EMAIL,
            to: user.email,
            subject: 'Verify your Twnkle Account!',
            text: 'Thank you for signing up for Twnkle. Please click the link below to verify your account!\n\n' +
            'https://https://astromeet-dedward3.c9users.io/user/verify/' + token
        };
        
        this.__sendMail(transporter, mailOptions, function(err, info) {
            if(err) {
                return cb(err, null);
            }
            
            cb(null, { success: true });
        });
    };
    
    return EmailSvc;
}());

module.exports = EmailSvc;