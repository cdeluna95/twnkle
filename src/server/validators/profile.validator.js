var _ = require( 'lodash' );

var validateAboutMe = function( aboutme ) {
    if( !_.isString( aboutme ) )
        return "About me must be a string";
    if( aboutme.length > 1000 )
        return "About me must be 1000 characters or less";

    return null;
};

var validateLookingFor = function( lookingfor ) {
    if( !_.isString( lookingfor ) )
        return "Looking for must be a string";
    if( lookingfor.length > 500 )
        return 'Looking for must be 500 characters or less';

    return null;
};

var validate = function( profile, cb ) {
    var aboutMeErr, lk4Err;
    var errs = [];
    if( (aboutMeErr = validateAboutMe( profile.aboutMe )) != null )
        errs.push( aboutMeErr );
    if( (lk4Err = validateLookingFor( profile.lookingFor )) != null )
        errs.push( lk4Err );


    if( errs.length > 0 )
        return cb( errs, null );
    cb( null, profile );
};

module.exports = {
    validate: validate
};