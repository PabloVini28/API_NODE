const express = require('express');
const router = express.Router();

// Retorna todos os pedidos
router.get('/',(req,res,next)=>{
        res.status(200).send({
            mensagem: 'Node JS na rota pedidos'
        });
});

// Adiciona um pedido
router.post('/',(req,res,next)=>{

    const pedidos = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'Usando post dentro da rota pedidos',
        pedidoCriado: pedidos
    })
});

// Retorna um pedido
router.get('/:id_pedido',(req,res,next)=>{
    const id = req.params.id_pedido

    res.status(200).send({
        mensagem:'usando o get de um pedido especial',
        id_pedido: id
    })
});

//Exclui um pedido
router.delete('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:'usando DELETE na rota pedidos'
    })
})

module.exports = router;