var express = require('express');
var app = express();
var port = 3012;
var equipe = require('./equipes');

app.get('/', function(req, res){
    res.send(equipe.getEquipes());
})



app.listen(port, function(){
    console.log('server ON / port'+" "+port)
})