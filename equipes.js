var express = require('express');
var fs = require('fs');

exports.getEquipes = function(){
    equipes = fs.readFileSync(__dirname+'/datas/equipes.json');
    equipe = JSON.parse(equipes);
    return equipe;
}

exports.cutArray = function(array, number){
    newTab = [];
    for (var i=0; i<array.length; i+=number){
        newTab.push(array.slice(i,i+number));
    }
    return newTab;
}