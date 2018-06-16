var express = require('express');
var fs = require('fs');

exports.getEquipes = function(){
    equipes = fs.readFileSync(__dirname+'/datas/equipes.json');
    equipe = JSON.parse(equipes);
    return equipe;
}