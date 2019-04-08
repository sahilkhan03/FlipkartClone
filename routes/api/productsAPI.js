'use strict';

let express = require('express'),
    Products = require('../../models/Products'),
    Comments = require('../../models/Comments'),
    router = express.Router();


router.get('/api/products/' , (req,res) => {
    Products.find().exec()
        .then( (products) => {
           res.json(products).status(200);
        }).catch( (error) => {
            res.json('Failed').status(400);
    });
});


module.exports = router;
