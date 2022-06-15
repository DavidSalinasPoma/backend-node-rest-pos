
// Para el autoCompletado
import { Response, Request } from 'express';

// Modelos
import User, { IUser } from '../models/User.model';

// Autenticacion JWT
import jwt from 'jsonwebtoken';


/**
 * Para usuario con pass encriptado y asignandole un token(Credencial)
 */
export const signup = async (req: Request, res: Response) => {

    const params = req.body;

    /** Guardando Un nuevo usuario */
    const user: IUser = new User({
        username: params.username,
        email: params.email,
        password: params.password
    });

    // Encriptando El password
    user.password = await user.encryptPassword(user.password);


    const saveUser = await user.save(); // Este metodo es un metodo asyncrono y devulve el objeto guardado
    /** Fin Guardando Un nuevo usuario  */


    /** El token es un pase al usuario para que le pueda pedir datos al servidor */
    const token: string = jwt.sign(
        {
            _id: saveUser._id, // El lugar donde se va a guardar el Token
        },
        process.env.TOKEN_SECRET || 'tokenTest' // Es la llave secreta
    );

    // Devolviendo al usuario en una cabecera
    res.header('auth-token', token).json(saveUser);
};


/**
 * Metodo de login de autenticación
 */
export const signin = async (req: Request, res: Response) => {

    // Aqui recibe parametros del body
    const params = req.body;

    // Busca al usuario por su email
    const user = await User.findOne({ email: params.email });

    // Preguntamos si no extiste un usuario
    if (!user) {
        return res.status(400).json('Email o password esta mal');
    }

    // Verifica si la contraseña es correcta
    const correctPassword: boolean = await user.validatePassword(params.password);
    if (!correctPassword) {
        return res.status(400).json('Invalid password');
    }

    // Aqui le esta asignando un pase Token al usuario
    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
        // Este token vence en 24 horas 60segundos * 60 * 24
        expiresIn: 60 * 60 * 24
    });

    // Devolviendo al usuario y el token en una cabecera
    res.header('auth-token', token).json(user);
};


// Metodo Prueba
export const prueba = (req: Request, res: Response) => {
    console.log('Estoy en el metodo de pruebas');
    return res.status(200).json('El usuario no existe');
};

/**
 * Muestra los datos del usuario
 */
export const profile = async (req: Request, res: Response) => {

    const user = await User.findById(req.userId, { password: 0 });

    if (!user) {
        return res.status(404).json('El usuario no existe');
    }

    // Si es coreccto devuelve el usuario autenticado
    res.json(user);
};

// Controlador generar precio
export const generarPrecio = (req: Request, res: Response) => {

    let sumaPrecio = 259.5;
    for (let index = 137; index <= 300; index++) {
        console.log(`case ${index}:`);
        console.log(`$precio = ${sumaPrecio = sumaPrecio + 2};`);
        console.log(`break;`);
    }
    return res.status(200).json('Algoritmo generado');
}


