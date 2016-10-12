'use strict';
/**
 * This is the model file for system users. The user's model is responsible
 * for validating registration information, as well as login information.
 *
 * @author David Edwards
 * @date 09/20/2016
 */

var util = require('util');


class User {

    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.email = user.email;
    }

    save() {
        
    }
}

module.exports = {
    validate: validate
};