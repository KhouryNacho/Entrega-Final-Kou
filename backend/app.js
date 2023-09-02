var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
var cors = require('cors');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newsRouter = require('./routes/news');
var testRouter = require('./routes/test');
var contactRouter = require('./routes/contact');
var galleryRouter = require('./routes/gallery');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var apiRouter = require('./routes/api');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use(session({
  secret: 'f9qt2fasfasa',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_user);
    if (req.session.id_user) {
      next();
    } else {
      res.redirect('/admin/login');
    } // cierro else
  } catch (error) {
    console.log(error);
  } // cierro catch error
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
app.use('/news', newsRouter);
app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);
app.use('/test', testRouter);
app.use('/api', cors(), apiRouter);



app.get('/test', function (req, res) {
  res.send('Hi, i`m kou')
})

app.get('/contact', function (req, res) {
  res.send('Hi, i`m an email')
})

app.get('/news', function (req, res) {
  res.send('Hi, i`m a news front')
})

app.get('/gallery', function (req, res) {
  res.send('Hi, i`m a gallery page')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
