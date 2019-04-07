'use strict';

let mongoose = require('mongoose');
let commentSchema = new mongoose.Schema({
    comment: {type: String , required: false}
});


module.exports = commentSchema;