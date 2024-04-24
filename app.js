const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.get('/produtos', (req, res) => {
    res.send('Listar Produtos');
})

app.post('/produtos', (req, res) => {
    res.send('Inserir Produtos');
})

app.listen(PORT, () => {
    console.log("Iniciando o servidor...")
})
