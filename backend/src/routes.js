const express = require('express')
const campanhaController = require('./controllers/campanhaController')
const userController = require('./controllers/userController')
const mobController = require('./controllers/mobController')
const profileController = require('./controllers/profileController')
const racaController = require('./controllers/racaController')
const habilidadesController = require('./controllers/habilidadesController')
const magiaController = require('./controllers/magiaController')
const classeController = require('./controllers/classeController')
const heroiController = require('./controllers/heroiController')


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

routes.get('/racas', racaController.index)
routes.post('/racas', racaController.create)
routes.delete('/racas/:id', racaController.delete)

routes.get('/classes', classeController.index)
routes.post('/classes', classeController.create)
routes.delete('/classes/:id', classeController.delete)

routes.get('/magias', magiaController.index)
routes.post('/magias', magiaController.create)
routes.post('/magiasRel', magiaController.relacionar)
routes.delete('/magias/:id', magiaController.delete)
routes.get('/magias/:id/:nivel', magiaController.relacionados)

routes.get('/habilidades/:id', habilidadesController.index)
routes.post('/habilidades', habilidadesController.create)
routes.delete('/habilidades/:id', habilidadesController.delete)

routes.get('/herois/:campanha', heroiController.index)
routes.post('/herois/:campanha/:idRaca/:idClasse/:raca/:classe', heroiController.create)
routes.delete('/herois/:id', heroiController.delete)





module.exports = routes