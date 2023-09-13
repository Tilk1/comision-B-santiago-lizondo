const sequelize = require('../db/db');
const Posteo = require('../db/models/post');
const dateUtils = require('../utils/dateUtils.js');

const mostrarCrearPosteo = (req,res) => {
    posteo_a_editar = null;
    res.render('../views/crear_posteo.ejs', { posteo_a_editar })
}

const eliminarPosteo = async(req,res) => {
    posteo_a_eliminar = await Posteo.findByPk(req.params.id)
    await posteo_a_eliminar.destroy();
    res.redirect('/')
}

const editarPosteo = async(req,res) => {
    posteo_a_editar = await Posteo.findByPk(req.params.id)
    if(!posteo_a_editar){
        return res.send('No existe el posteo')
    }
    res.render('../views/crear_posteo.ejs', {posteo_a_editar})
}

const crearPosteo = async(req,res) => {
    const {titulo, contenido , link_imagen} = req.body;
    if(req.params.id){
        posteo_a_editar = await Posteo.findByPk(req.params.id)
        posteo_a_editar.titulo = titulo;
        posteo_a_editar.contenido = contenido;
        posteo_a_editar.link_imagen = link_imagen;
        await posteo_a_editar.save();
    }else{
        const fecha = dateUtils.generar_string_fecha();
        await Posteo.create({titulo:titulo, contenido: contenido, link_imagen: link_imagen, fecha_creacion: fecha })
    }
    res.redirect('/')
}

module.exports = {
    mostrarCrearPosteo,
    eliminarPosteo,
    editarPosteo,
    crearPosteo,
}