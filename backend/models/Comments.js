'use strict';

//Defining Comments Schema
let mongoose = require('mongoose');
let commentSchema = new mongoose.Schema({
    comment: {type: String , required: false},
 
        author:{
            id:{
             type:mongoose.Schema.Types.ObjectId,
             ref:"User"
            },
            username:String
        }
});


module.exports = mongoose.model('Comments',commentSchema);
