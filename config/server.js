var express = require('express');

//var meuModulo = require('./modulo.externo')();
//console.log(meuModulo);

var app = express();
app.set('view engine', 'ejs');

app.set('views','./app/views');

module.exports = app;
