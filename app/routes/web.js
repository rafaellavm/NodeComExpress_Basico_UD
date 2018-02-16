
module.exports= function(app){
    app.get('/contato',function(req,res){

        res.render('site/contato'); //retorna o html   
    });
    
    app.get('/',function(req,res){
    
       res.render('site/home'); //retorna o html      
    });
    
    
}