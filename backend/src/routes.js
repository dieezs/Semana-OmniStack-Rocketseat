const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// const params = request.query; Acessado via Parametro Query
// const params = request.params; Acessado via Parametro Route
// const body = request.body; //Acessado via Parametro Body

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes