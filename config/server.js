module.exports = function () {
    var express = require('express');

    //var meuModulo = require('./modulo.externo')();
    //console.log(meuModulo);

    var app = express();
    app.set('view engine', 'ejs');

    app.set('views', './app/views');

    var rotas = require('../app/routes/web'); //importanto as páginas
    rotas(app);

    app.listen(8900, function(){
        console.log("localhost:8900");
    });
}