const storage = require('../model/storage')


module.exports = {

    index(req, res) {
        res.send(storage.getProdutos())
    },

    show(req, res) {
        res.send(storage.getProduto(req.params.id))
    },

    store(req, res) {
        console.log(req.body)
        const produto = storage.salvarProdutos({
            nome: req.body.nome,
            preco: req.body.preco,
        })

        res.send(produto)
    },

    update(req, res) {
        const produto = storage.salvarProdutos({
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco
        })

        res.send(produto)
    },

    delete(req, res) {
        const produto = storage.excluirProduto(req.params.id)
        res.send(produto)
    }

}