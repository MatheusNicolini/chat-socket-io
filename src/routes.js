// Executando o módulo express neste arquivo
const express = require('express');

// Inicializando o módulo do express
const routes = express();

routes.get('/', (req , res) => {
  res.sendFile('index.html', {root: __dirname});
});

module.exports = routes;