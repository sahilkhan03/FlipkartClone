'use strict';

let express = require('express'),
    rp = require('request-promise'),
    router = express.Router();

//Homepage
router.get('/' , (req,res,next) => {

    rp('http://localhost:3000/api/products/')
        .then((products) => {
            res.status(200).render('index' , {products: products});
        }).catch( (error) => {
        console.log(error);
        next( new Error ('Oops! Something went wrong'));
    });
});

//New product form page
router.get('/new' , (req,res,next) => {

    res.status(200).render('newProduct') ;

});

//Show details of specific products
router.get('/show/:id' , (req,res,next) => {

    let url = 'http://localhost:3000/api/products/' + req.params.id ;
    rp( url )
        .then( (product) => {
           res.status(200).render('showProduct' , {product: product});
        })
        .catch( (error) => {
            console.log(error);
            next( new Error ('Oops! Something went wrong'));
        });

});


//Show edit form to update details of a product
router.get('/show/:id/edit' , (req,res) => {

    res.status(200).render('updateProductDetails');

});

module.exports = router;

