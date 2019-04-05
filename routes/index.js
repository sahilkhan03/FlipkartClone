let express = require('express');
let router = express.Router();

router.get('/' , (req,res) => {
   res.send("Index Page");
});

module.exports = router;