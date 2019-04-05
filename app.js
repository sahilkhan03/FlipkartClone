let app = require('express')();

app.set('view engine','ejs');
app.use(express.static('public'));




//Listening on port 5000
app.listen(5000, () => {
   console.log("Server started on port 5000");
});