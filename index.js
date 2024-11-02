const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar dados do formulário
app.use(express.urlencoded({ extended: false }));

// Rota para o formulário
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para processar os dados do formulário
app.post('/cadastro', (req, res) => {
  const nome = req.body.nome;
})