var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Foodery' });
});

router.post('/submit-form', function(req, res) {
  const name = req.body.name;
  const foods = req.body.fn;
  const address = req.body.add;
  let content = `Order placed by ${name},
Foods to deliver to ${name} are ${foods} at this address - ${address}`;
  fs.writeFile(path.join(__dirname, '../message.txt'), content, function(err){
    if(err){
      console.error(err);
      return;
    }
    res.render('submitted');
  })
})

module.exports = router;
