'use strict';

let express = require('express'),
    Products = require('../../models/Products'),
    Comments = require('../../models/Comments'),
    router = express.Router();

//Get all Products
router.get('/api/products/' , (req,res,next) => {
    Products.find().populate('comments').exec()
        .then( (products) => {
           res.status(200).json(products);
        }).catch( (error) => {
            console.log(error);
            next(error);
    });
});

//Add new product to database
router.post('/api/products' , (req,res,next) => {

    Products.create( req.body.blog )
        .then( (product) => {
            console.log(product);
            res.status(200).redirect('http://localhost:3000/products');
        })
        .catch( (error) => {
           console.log(error);
           next(error);
        });

});

//Show details of specific product
router.get('/api/products/:id' , (req,res,next) => {

    Products.findById( req.params.id ).populate('comments').exec()
        .then( (product) => {
            res.status(200).json(product);
        })
        .catch( (error) => {
            console.log(error);
            next(error);
        });

});

//Update details of specific product
router.put('/api/products/:id' , (req,res,next) => {

    Products.findByIdAndUpdate( req.params.id , req.body.blog )
        .then( (product) => {
           console.log(product);
           res.status(200).redirect('/');
        })
        .catch( (error) => {
           console.log(error);
           next(error);
        });

});

//Delete specific product from database
router.delete('api/products/:id' , (req,res,next) => {
   Products.findByIdAndRemove( req.params.id )
       .then( (product) => {
           console.log(product);
           res.status(200).redirect('/');
       })
       .catch( (error) => {
           console.log(error);
           next(error);
       })
});

module.exports = router;
