const express = require('express')
const routes = express.Router()

const ItemController = require('./controller/ItemController')

routes.get('/itens', ItemController.index)

module.exports = routes
