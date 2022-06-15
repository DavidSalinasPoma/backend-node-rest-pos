// Archivo para configurar el servidor de NODEJS
import express, { Application } from 'express';

// Base de datos mongoDb o SQL
// import '../db/conexion.db';
import db from '../db/conection';

// Importando el cors
import cors from 'cors';

// Creamos el alias directamente
import authRoutes from '../routes/auth.routes';
import usuariosRoutes from '../routes/usuarios.routes';

// Para ver en consola las peticiones
import morgan from 'morgan';



class Server {
    // Atributos
    private app: Application;
    private port: string;

    // Creando paths de las rutas
    private apiPaths = {
        auth: '/api/auth'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Tiene que ejecutarse en ese orden
        // 1.- Base de datos
        this.dbConection();

        // 2.- This middlerares
        this.middlewares();

        // 3.- Definir rutas
        this.routes();


    }


    // 1.- Base de datos Mysql y sequalize
    /**
     * dbConection
     */
    public async dbConection() {
        try {
            await db.authenticate();
            console.log('Database is online');

        } catch (error: any) {
            throw new Error(error);
        }

    }


    // 2.- Para parsear el BODY
    // Son metodos que se ejecutan antes de que se pase a una ruta
    public middlewares() {
        // CORS
        this.app.use(cors());

        //Lectura del BODY para que funcione potsman y entienda los formatos JSON
        this.app.use(express.json());

        // Configurando la carpeta publica
        this.app.use(express.static('public'));

    }

    /**
     * PUBLIC ROUTES ES UN middlewares
     */
    public routes() {

        // Morgan
        this.app.use(morgan('dev'));

        // Rutas Aqui la url para las rutas authRoutes (auth: '/api/auth') 
        this.app.use(this.apiPaths.auth, authRoutes); // Ejecuta todos los metodos de esa clase

        this.app.use(this.apiPaths.auth, usuariosRoutes);

    }


    /**
     * Metodo que escucha el servidor
     */
    public listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto!!: ' + this.port);
        })
    }

}

// Se exporta la clase  para que todos los utilizen
export default Server;