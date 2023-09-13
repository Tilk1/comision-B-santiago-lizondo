//invocamos express
const express = require('express');
const path = require('path');
const app = express();
const sequelize = require('./db/db');

//seteamos url encode para capturar los datos del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//motor plantillas
app.set('view engine', 'ejs');

//proyecto de rutas
app.use('/', require('./routes/userRoutes'))

//para que las vistas(html/ejs) los busque en la carpeta views(pages).
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//para que busque los archivos estaticos tengan la carpeta public.
app.use(express.static('public'));

//servidor puerto
app.listen(3000, (req, res) => {
  console.log('SERVER RUNNING IN  localhost:3000')
});

//crea las tablas
sequelize.sync()

require('./db/models/post');

module.exports = sequelize;