const express = require('express')
const productController = require('./controller/productController')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ status: 'Online' })
})

routes.get('/produtos', productController.index)

routes.get('/produtos/:id', productController.show)

routes.post('/produtos', productController.store)

routes.put('/produtos/:id', productController.update)

routes.delete('/produtos/:id', productController.delete)

module.exports = routes