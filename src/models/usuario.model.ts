import { DataTypes } from 'sequelize';
import db from '../db/conection';

// Definimos el nombre del modelo (Usuario)
const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    perfil: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.TINYINT
    },
    ultimo_login: {
        type: DataTypes.DATE
    }
});

export default Usuario;
/*La idea de un modelo es que se encargue de hacer saniamieto(querys)
 de las insersiones de manera segura*/