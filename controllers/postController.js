const sequelize = require('../db/db');
const Posteo = require('../db/models/post');
const moment = require('moment');

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
        const fecha = new Date();
        const dia = fecha.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Obtén el mes (se suma 1 porque los meses comienzan en 0) y asegúrate de tener 2 dígitos
        const anio = fecha.getFullYear();
        
        const hora = fecha.getHours().toString().padStart(2, '0'); // Obtén la hora y asegúrate de tener 2 dígitos
        const minutos = fecha.getMinutes().toString().padStart(2, '0'); // Obtén los minutos y asegúrate de tener 2 dígitos
        const segundos = fecha.getSeconds().toString().padStart(2, '0'); // Obtén los segundos y asegúrate de tener 2 dígitos
        
        const fechaFormateada = `${mes}/${dia}/${anio} -  ${hora}:${minutos}:${segundos}`;

        await Posteo.create({titulo:titulo, contenido: contenido, link_imagen: link_imagen, fecha_creacion: fechaFormateada})
    }
    res.redirect('/')
}

module.exports = {
    mostrarCrearPosteo,
    eliminarPosteo,
    editarPosteo,
    crearPosteo,
}