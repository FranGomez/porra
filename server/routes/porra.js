'use strict';

// User routes use users controller
var porras = require('../controllers/porras');

module.exports = function(app, passport) {

    app.route('/porra')
        .get(porras.porra)
        .post(porras.create);

};