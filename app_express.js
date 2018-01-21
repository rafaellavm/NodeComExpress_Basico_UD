var express = require('express');
var app = express();

app.get('/contato',function(req,res){

     res.send(`
     <html lang="pt-br">
 
         <head>
             <meta charset="UTF-8">
             <title>Testando o node</title>
         </head>
 
         <body>
             <h1>Página de contato</h1>
         </body>
     </html>`); //retorna o html   
});

app.get('/',function(req,res){

    res.send(`
    <html lang="pt-br">

        <head>
            <meta charset="UTF-8">
            <title>Testando o node</title>
        </head>

        <body>
            <h1>Página principal</h1>
        </body>
    </html>`); //retorna o html   
});


app.listen(8900, function(){
    console.log("localhost:8900");
});