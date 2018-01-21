var http = require('http');

var server = http.createServer(function(req,res){

    var pagina = req.url;
    console.log(pagina)

    if (pagina == '/contato'){
        res.end(`
        <html lang="pt-br">
    
            <head>
                <meta charset="UTF-8">
                <title>Testando o node</title>
            </head>
    
            <body>
                <h1>Página de contato</h1>
            </body>
        </html>`); //consegue retornar uma informação pro navegador
    }
    else{
        res.end(`
        <html lang="pt-br">
    
            <head>
                <meta charset="UTF-8">
                <title>Testando o node</title>
            </head>
    
            <body>
                <h1>Página de home</h1>
            </body>
        </html>`); //consegue retornar uma informação pro navegador
    }

    
});

console.log("localhost:8900");
server.listen(8900);