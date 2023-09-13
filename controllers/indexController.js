const sequelize = require('../db/db');
const Posteo = require('../db/models/post');

const mostrarIndex = async(req,res) => {
    const posteos = await Posteo.findAll();
    res.render('../views/index.ejs', {posteos})
}

module.exports = {
    mostrarIndex,
}