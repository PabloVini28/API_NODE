const express = require('express');
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos'); 
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // dados simples
app.use(bodyParser.json()); // formato json de entrada


app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);


app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message 
        }  
    });
});

module.exports = app;
