'use strict';

let express = require('express'),
    rp = require('request-promise'),
    router = express.Router();


router.get('/' , (req,res) => {

    rp('http://localhost:3000/api/products/')
        .then((products) => {
            res.render('index' , {products: products});
        }).catch( (error) => {
        console.log(error);
    });
});

module.exports = router;

