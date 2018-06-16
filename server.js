var express = require('express');
var app = express();
var port = 3012;
var equipe = require('./equipes');

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    var tab = equipe.getEquipes();
    var newCut = equipe.cutArray(tab, 4)
    console.log(newCut);
    res.render('index',{
        equipes : newCut
    });
})



app.listen(port, function(){
    console.log('server ON / port'+" "+port)
})