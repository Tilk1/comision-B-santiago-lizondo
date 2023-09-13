const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Post extends Model { }
Post.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link_imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_creacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: false,
});

module.exports = Post;