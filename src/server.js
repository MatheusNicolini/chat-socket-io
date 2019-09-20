const express = require('express');
const routes = require('./routes');

// Passa o express para o http-server
const http = require('http').Server(routes);

// Passa o http-server par ao socket.io
const io = require('socket.io')(http);

const server = express();

server.use(express.json());
server.use(routes);

io.on('connection', (socket) => {
  console.log('Usuário conectado');
  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
  socket.on('chat message', function(msg){
    console.log('Mensagem: ' + msg);
  });
});

// Inicia o servidor na porta informada, no caso vamo iniciar na porta 8080
http.listen(8080, () => {
  console.log('Servidor rodando em: http://localhost:8080');
});

// server.listen(8080);

