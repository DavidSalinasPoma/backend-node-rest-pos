# Sistema de autenticacion con JWT y mongoDB

1.- Iniciar el proyecto NODEJS

<!-- Permite listar las dependencia e iniciar un proyecto -->

$ npm init -y

2.- Instalar compilador para TS
$ npm i typescript
--- Iniciar Typescript
npx tsc --init
$ npx tsc //Crea la carpeta dist
$ node dist/index.js //Ejecuta el archivo index.js

3.- Instalar paquete que ejecuta dos cosas a la vez
$ npm i concurrently -D
Configurar el script de ejecucion
"scripts": {
"dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
},

3.- Instalar NODEMON para que manteja vililando los cambios
$ npm i nodemon -D

4.- Instalar el framework expressJS
$ npm i express
$ npm i @types/express -D

4.- Instalar dotenv para las variables de entorno
$ npm i dotenv -D

5.- Mostrar por consola las peticiones que llegan
$ npm i morgan -D
$ npm i @types/morgan

6 .- Instalar CORS para NODEJS
$ npm i cors
npm i --save-dev @types/cors

7.- Mongosse es un modulo que permite conectarse a mongo DB
$npm i mongoose
Iniciar mongoDB (mongod)

8.- Intalando JWT para autenticacion
$ npm install jsonwebtoken
npm i --save-dev @types/jsonwebtoken

9.- Para encriptar las contraseña
$ npm i bcryptjs
npm i --save-dev @types/bcryptjs

10.- Validacion de datos /// eso falta de este curso

1.-express validator-- (Para formularios) investigar
2.-@hapi/joi
