'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var PorraSchema = new Schema({}, { strict: false });


/**
 * Statics
 */
/*ArticleSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};*/

mongoose.model('Porra', PorraSchema);
