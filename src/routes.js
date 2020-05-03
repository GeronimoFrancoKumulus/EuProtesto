const express = require('express');
const protestoController = require('./controller/protestoController');

const routes = express.Router();

routes.get('/protesto', protestoController.index);
routes.post('/protesto', protestoController.create);

module.exports = routes;