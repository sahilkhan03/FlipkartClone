'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    http = require('http'),
    app  =  express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

//Require all routes here
let routes = require('./routes');
let ProductsAPI = require('./routes/api/productsAPI');

//Use all routes here
app.use(routes);
app.use


//Listening on port 3000
app.listen(3000, () => {
   console.log("Server started on port 3000");
});