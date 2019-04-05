let app = require('express')(),
   http = require('http');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));


let routes = require('./routes/index');



//Listening on port 5000
http.listen(5000, () => {
   console.log("Server started on port 5000");
});