console.log(222);
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

//把路由引进来，找到getorder的路由，进入这个路由
var orderListRouter = require('./routes/getlist');
var updataRouter = require('./routes/updata');
var checknameRouter = require('./routes/checkname');
var signInRouter = require('./routes/signIn');
var FindlistRouter = require('./routes/findlist');
var DelshopRouter = require('./routes/delshop');
var AddshopRouter = require('./routes/addshop');
var newListRouter = require('./routes/newList');
var SelectshopRouter = require('./routes/selectshop');
var FinduserRouter = require('./routes/finduser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
console.log(333);
//请求服务器时，在寻找中间件的时候，找到获取订单列表的路由,进入对应的路由执行相应的操作
app.use('/getorder', orderListRouter);
app.use('/updata', updataRouter);
app.use('/checkname', checknameRouter);
app.use('/signIn', signInRouter);
app.use('/findlist', FindlistRouter);
app.use('/delshop', DelshopRouter);
app.use('/addshop', AddshopRouter);
app.use('/selectshop', SelectshopRouter);
app.use('/new',newListRouter);
app.use('/finduser',FinduserRouter);

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
