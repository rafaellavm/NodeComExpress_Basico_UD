var app = require('./config/server');

app.get('/contato',function(req,res){

     res.render('site/contato'); //retorna o html   
});

app.get('/',function(req,res){

    res.render('site/home'); //retorna o html      
});


app.listen(8900, function(){
    console.log("localhost:8900");
});