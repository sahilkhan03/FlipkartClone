'use strict';

//Defining Comments Schema
let mongoose = require('mongoose');
let commentSchema = new mongoose.Schema({
    comment: {type: String , required: false}
});


module.exports = mongoose.model('Comments',commentSchema);