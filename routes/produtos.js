const express = require('express');
const router = express.Router();

// Retorna todos os pprodutos
router.get('/',(req,res,next)=>{
        res.status(200).send({
            mensagem: 'Node JS na rota produtos'
        });
});

// Adiciona um produto
router.post('/',(req,res,next)=>{

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Insere produto',
        produtoCriado: produto
    })
});

// Retorna um produto
router.get('/:id_produto',(req,res,next)=>{
    const id = req.params.id_produto

    if(id == 'especial'){
        res.status(200).send({
            mensagem:'usando o get de um produto especial',
            id: id
        })
    }else{
        res.status(200).send({
            mensagem:'voce passou um id',
        })
    }
});

// Altera um produto
router.patch('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:'usando PATCH na rota produtos'
    });
});

//Exclui um produto
router.delete('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:'usando DELETE na rota produtos'
    })
})

module.exports = router;