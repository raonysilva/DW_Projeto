const express = require('express');
const app=express();
const porta=process.env.port;
const req = require('express/lib/request');
const res = require('express/lib/response');

//HTML
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get('/cadastro.html', function(req, res){
    res.sendFile(__dirname + '/cadastro.html');
});
app.get('/ip.html', function(req, res){
    res.sendFile(__dirname + '/ip.html');
});

//CSS
app.get('/css/index.css', function(req, res){
    res.sendFile(__dirname + '/css/index.css');
});
app.get('/css/cadastro.css', function(req, res){
    res.sendFile(__dirname + '/css/cadastro.css');
});
app.get('/css/ip.css', function(req, res){
    res.sendFile(__dirname + '/css/ip.css');
});

//IMGAGEM
app.get('/img/user4.png', function(req, res){
    res.sendFile(__dirname + '/img/user4.png');
});
app.get('/img/mundo.png', function(req, res){
    res.sendFile(__dirname + '/img/mundo.png');
});

//JS
app.get('/js/init.js', function(req, res){
    res.sendFile(__dirname + '/js/init.js');
});
app.get('/js/ip.js', function(req, res){
    res.sendFile(__dirname + '/js/ip.js');
});
app.get('/js/cadastro.js', function(req, res){
    res.sendFile(__dirname + '/js/cadastro.js');
});


app.listen(porta || 3000,()=>{console.log('Servidor Funcionando')});
