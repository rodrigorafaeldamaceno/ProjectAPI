const storage = require('./storage')

const express = require('express')
const routes = express.Router()

routes.get('/produtos', (req, res, next) => {
    res.send(storage.getProdutos())
})

routes.get('produtos/:id', (req, res) => {
    res.send(storage.getProduto(req.params.id))
})

routes.post('/produtos', (req, res, next) => {
    console.log(req.body)
    
    const produto = storage.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco,
    })

    res.send(produto)
})

module.exports = routes