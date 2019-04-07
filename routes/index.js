'use strict';

let express = require('express'),
    rp = require('request-promise'),
    router = express.Router();


router.get('/' , (req,res) => {
   res.render('index');
});

router.get('/api' , (req,res) => {
    rp('http://localhost:3000/api/products/')
        .then((products) => {
            res.send(products);
        }).catch( (error) => {
        console.log(error);
    });
});

module.exports = router;

