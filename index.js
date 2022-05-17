const express = require('express');
const app=express();
const porta=process.env.port;
const bodyParser = require('body-parser');

app.get('/',(req,res)=>{
    res.sendfile(__dirname + '/index.html');
})
app.get('/cadastro.html', function(req, res){
    res.sendfile(__dirname + '/cadastro.html');
});
app.get('/ip.html', function(req, res){
    res.sendfile(__dirname + '/ip.html');
});



app.get('/css/index.css', function(req, res){
    res.sendfile(__dirname + '/css/index.css');
});
app.get('/css/cadastro.css', function(req, res){
    res.sendfile(__dirname + '/css/cadastro.css');
});
app.get('/css/ip.css', function(req, res){
    res.sendfile(__dirname + '/css/ip.css');
});


app.get('/img/user4.png', function(req, res){
    res.sendfile(__dirname + '/img/user4.png');
});
app.get('/img/mundo.png', function(req, res){
    res.sendfile(__dirname + '/img/mundo.png');
});


app.get('/js/init.js', function(req, res){
    res.sendfile(__dirname + '/js/init.js');
});
app.get('/js/ip.js', function(req, res){
    res.sendfile(__dirname + '/js/ip.js');
});
app.get('/js/cadastro.js', function(req, res){
    res.sendfile(__dirname + '/js/cadastro.js');
});

app.use(bodyParser.urlencoded({extended:true}));
app.post('/',(req,res)=>{
    console.log(req.body.loginAdd-KdsRootKey);
    res.sendfile(__dirname + '/index.html');
})


app.listen(porta || 3000,()=>{console.log('Servidor Funcionando')});