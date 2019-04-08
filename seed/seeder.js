let faker = require('faker'),
    mongoose = require('mongoose');

mongoose.connect('http://localhost/easeMyCart');

//Require Products Schema
let Products = require('../models/Products');

 for(let i=0;i<100;i++) {
     Products.create({

     })
 }
