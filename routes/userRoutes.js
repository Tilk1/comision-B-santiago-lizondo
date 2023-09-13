const { mostrarIndex } = require('../controllers/indexController');
const { mostrarCrearPosteo , eliminarPosteo , editarPosteo , crearPosteo} = require('../controllers/postController');

//invocamos express
const app = require('express').Router()

////////////////////   RUTAS     //////////////////////////

app.get('/', mostrarIndex)

app.get('/editar_posteo/:id', editarPosteo)

app.post('/eliminar/:id', eliminarPosteo)

app.get('/crear_posteo', mostrarCrearPosteo)
app.post('/crear_posteo', crearPosteo)
app.post('/crear_posteo/:id', crearPosteo)

module.exports = app;

