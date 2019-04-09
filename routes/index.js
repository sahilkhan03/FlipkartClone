'use strict';

let express = require('express'),
    rp = require('request-promise'),
    router = express.Router();

//Homepage
router.get('/' , (req,res) => {

    rp('http://localhost:3000/api/products/')
        .then((products) => {
            res.render('index' , {products: products});
        }).catch( (error) => {
        console.log(error);
    });
});

//New product form page
router.get('/new' , (req,res) => {

    res.render('newProduct') ;

});

//Show details of specific products
router.get('/show/:id' , (req,res) => {

    let url = 'http://localhost:3000/api/products/' + req.params.id ;
    rp( url )
        .then( (product) => {
           res.render('showProduct' , {product: product})
        })
        .catch( (error) => {
            console.log(error);
        });

});

    module.exports = router;

