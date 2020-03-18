var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoouse = require('mongoose')
var dbConn = mongoouse.connection
dbConn.once("open",function(){
  console.log("MongoDB Open OK")
})

dbConn.on('error',function(){
  console.err
})

mongoouse.connect("mongodb://localhost/mydb")


var config = require("./config")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 위에서 생성한 config 변수(객체)를 router에게 전달하기
var gjBusRouter = require('./routes/gjBusRouter')(app, config)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gjbus', gjBusRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
