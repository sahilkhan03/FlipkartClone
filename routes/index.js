'use strict';

let express = require('express'),
    productsAPI = require('./api/productsAPI'),
    request = require('request'),
    router = express.Router();


router.get('/' , (req,res) => {
   res.render('index');
});

request('/api/productsAPI')
    ;

module.exports = router;

