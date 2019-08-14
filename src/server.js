const port = 3000

const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const server = express()

//body parser serve para tratar os params no body
server.use(bodyParser.urlencoded({ extended: true }))
server.use(routes)

server.listen(port)