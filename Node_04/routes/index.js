var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var book = {
    name : '자바스크립트만세',
    writer : 'BJMIN',
    comp : '한빛출판사',
    year : '2033'
  }

  var books= [

    {name :'K1'},
    {name :'K2'},
    {name :'K3'},
    {name :'K4'},
    {name :'K5'},
    {name :'K6'}

  ]

  res.render('index', { title: 'Include 연습' , book:book, books:books });
});

module.exports = router;
