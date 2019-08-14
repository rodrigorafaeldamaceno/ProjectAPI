const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

const salvarProdutos = produto => {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto

    return produto
}

const getProduto = id => produtos[id] || {}

const getProdutos = () => Object.values(produtos)

module.exports = { salvarProdutos, getProduto, getProdutos }