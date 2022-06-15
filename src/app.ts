// Para las variables globales
import dotenv from 'dotenv';
dotenv.config();

// importando el servidor
import Server from './models/server';

// Creamos el objeto server
const server = new Server();
// Accedemos a su metodo de la clase
server.listen();