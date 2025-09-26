var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello Express JS!" );
});

router.get('/user', function(req, res, next) {
    let {firstName, lastName} = req.query;
    if (!firstName || !lastName) {
        firstName = "Pretesh" ;
        lastName = " Patel";
    }
    res.json({firstName: firstName, lastName: lastName});
})

router.post('/user/:firstName/:lastName', function(req, res, next) {
    let {firstName, lastName} = req.params;
    res.json({firstName: firstName, lastName: lastName});
})

router.post('/users', function(req, res, next) {
    let arr =[
        { "firstname": "Pritesh", "lastname": "Patel" },
        { "firstname": "John", "lastname": "Doe" },
        { "firstname": "John", "lastname": "Rome" }
    ]
    res.json(arr);
})

module.exports = router;


