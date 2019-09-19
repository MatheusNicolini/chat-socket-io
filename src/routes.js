// Executando o módulo express neste arquivo
const express = require('express');

// Inicializando o módulo do express
const routes = express();

// Passa o express para o http-server
var http = require('http').Server(routes);

// Passa o http-server par ao socket.io
var io = require('socket.io')(http);

routes.get('/', (req , res) => {
  res.sendFile('index.html', {root: __dirname});
});

// Sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
 
// Inicia o servidor na porta informada, no caso vamo iniciar na porta 8080
// http.listen(8080, function(){
//   console.log('Servidor rodando em: http://localhost:8080');
// });

module.exports = routes;