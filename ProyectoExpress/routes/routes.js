//Cargue la conexion del grupo MySQL
const pool = require('../data/config');
//Ruta de la app
const router = app =>{
    //mostrar mensaje de bienvenidaa de root
    app.get('/', (request, response) =>{
        response.send({
            message: 'Bienvenido a Node.js Express REST API!'
        });
    }) ;
}