'use strict';
//Route for about page
let express = require('express'),
    path = require('path'),
    router = express.Router();

router.get('/about' , (req,res) => {
    res.render('about');
}) ;


module.exports = router;