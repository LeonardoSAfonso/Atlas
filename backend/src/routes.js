const express = require('express')
const campanhaController = require('./controllers/campanhaController')
const userController = require('./controllers/userController')
const mobController = require('./controllers/mobController')
const profileController = require('./controllers/profileController')


const routes = express.Router();

routes.get('/campanhas', campanhaController.index)
routes.post('/campanhas', campanhaController.create)
routes.delete('/campanhas/:id', campanhaController.delete)

routes.get('/profile', profileController.index)
routes.post('/session', profileController.session)

routes.get('/users', userController.index)
routes.get('/user', userController.getByEmail)
routes.post('/users', userController.create)
routes.delete('/users/:id', userController.delete)

routes.get('/mobs/add', mobController.index)
routes.post('/mobs', mobController.create)
routes.delete('/mobs/:id', mobController.delete)
routes.post('/mobs/:id/:campanha', mobController.relaciona)
routes.get('/mobs/:campanha', mobController.relacionados)





module.exports = routes