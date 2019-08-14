const storage = require('./storage')
const express = require('express')
const routes = express.Router()



routes.get('/produtos', (req, res) => {
    res.send(storage.getProdutos())
})

routes.get('/produtos/:id', (req, res) => {
    res.send(storage.getProduto(req.params.id))
})

routes.post('/produtos', (req, res) => {
    console.log(req.body)

    const produto = storage.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco,
    })

    res.send(produto)
})

routes.put('/produtos/:id', (req, res) => {
    const produto = storage.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

routes.delete('/produtos/:id', (req, res) => {
    const produto = storage.excluirProduto(req.params.id)
    res.send(produto)
})



module.exports = routes