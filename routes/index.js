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


module.exports = router;

