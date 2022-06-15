// Para el auto completado
import { Request, Response } from 'express';
import Usuario from '../models/usuario.model';

// Index de Usuarios
export const indexUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();

    return res.status(200).json({
        message: 'Todos los Usuarios',
        usuarios: usuarios
    });
};

// Show de Usuarios
export const showUsuario = async (req: Request, res: Response) => {

    // capturando el id del usuario
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id); // Un ususario por id

    if (usuario) {
        return res.status(200).json({
            message: 'Un Usuario',
            usuario: usuario
        });
    } else {
        return res.status(404).json({
            message: `No existe un usuario con el id: ${id}`,
        });
    }



};



