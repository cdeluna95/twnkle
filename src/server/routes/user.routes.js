/**
 * This file is responsible for handing the requests for our user routes
 *
 * @author David Edwards
 * @date 09/20/2016
 */
var router = require('express').Router();

var ctrl = require('../controllers/user.ctrl');

router.post('/login', ctrl.login);

module.exports = router;
