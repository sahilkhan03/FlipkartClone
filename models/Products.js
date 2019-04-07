'use strict';
//Defining Product Schema
let mongoose = require('mongoose');
let productSchema = new mongoose.Schema({
    title: {type: String , required: true} ,
    price : {type: Number , required: true} ,
    discount : {type: Number , default: 0},
    image: {type: String, required: true},
    features : {type: String, required: true},
    description : {type: String, required: true},
    ratings: {type: Number, default: 0},
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }]
});

module.exports = productSchema;
