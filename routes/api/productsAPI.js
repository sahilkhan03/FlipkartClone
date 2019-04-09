'use strict';

let express = require('express'),
    Products = require('../../models/Products'),
    Comments = require('../../models/Comments'),
    router = express.Router();

//Get all Products
router.get('/api/products/' , (req,res) => {
    Products.find().populate('comments').exec()
        .then( (products) => {
           res.json(products).status(200);
        }).catch( (error) => {
            res.json('Failed').status(400);
    });
});

//Add new product to database
router.post('/api/products' , (req,res) => {

    Products.create( req.body.blog )
        .then( (product) => {
            console.log(product);
        })
        .catch( (error) => {
           console.log(error);
        });

});


module.exports = router;
