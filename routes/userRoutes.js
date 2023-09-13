const { mostrarIndex } = require('../controllers/indexController');

//invocamos express
const app = require('express').Router()

////////////////////   RUTAS     //////////////////////////

app.get('/', mostrarIndex)

module.exports = app;

