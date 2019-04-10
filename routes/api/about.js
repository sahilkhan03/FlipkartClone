'use strict';
//Route for about page
let express = require(express),
    router = express.Router();

router.get('/about' , (req,res) => {
    res.render('about.html');
}) ;