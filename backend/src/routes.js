const express = require('express')
const campanhaController = require('./controllers/campanhaController')
const userController = require('./controllers/userController')
const profileController = require('./controllers/profileController')


const routes = express.Router();

routes.get('/campanhas', campanhaController.index)
routes.post('/campanhas', campanhaController.create)

routes.get('/profile', profileController.index)
routes.post('/session', profileController.session)

routes.get('/users', userController.index)
routes.get('/user', userController.getByEmail)
routes.post('/users', userController.create)



module.exports = routes