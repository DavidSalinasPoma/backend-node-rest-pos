import { NextFunction, Request, Response, } from "express";
import jwt from 'jsonwebtoken';

interface IPayload {
    _id: string;
    iat: number;
    exp: number;
};

// Funcion que valida un token esto es unMidleware
export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {

    // Recibiendo el token del header enviado por el cliente
    const token = req.header('auth-token');

    // Si no existe token
    if (!token) {
        return res.status(401).json('Acceso denegado');
    }

    // Esto toma el token y devuelve los datos que estaban dentro del token en payload
    const payload = jwt.verify(token, process.env.TOEN_SECRET || 'tokentest') as IPayload;


    // Distribucion del PAYLOAD por toda la aplicacion
    /** Aqui vamos a extender una interface */
    req.userId = payload._id;

    next();
};