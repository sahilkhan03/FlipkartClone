let express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    app  =  express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));


let routes = require('./routes/index');

app.use('/',routes);


//Listening on port 3000
app.listen(3000, () => {
   console.log("Server started on port 3000");
});