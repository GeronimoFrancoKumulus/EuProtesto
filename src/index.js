const restify = require('restify');
const express = require('express');
const routes = require('./routes');

const server = restify.createServer({name : "Node 1"})

function hell(req, res, next) {
    const mensagem = {texto:"hello world"};
    res.json(mensagem);
    next;
}

server.get('/hell', hell);

const app = express();

app.use(express.json());
app.use(routes);

server.listen(3000, function () {
    console.log('escutando', server.name);
});
//app.listen(3333);