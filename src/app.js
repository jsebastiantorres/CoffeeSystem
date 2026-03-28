

// 1. IMPORTACIONES DE MODULOS
const express = require('express');     //express.js es el framework para el servidor

// 2. Manejar las rutas
const path = require('path');

// 3. Ejecuta la conexión a base de datos
require('./config/db');


// 4. INICIALIZACIÓN
const app = express();                  // se crea instancia de la aplicación
const PORT = process.env.PORT || 3000;  // se define el puerto 3000 por defecto


// 3. MIDDLEWARES (configuraciones de datos)
app.use(express.json()) // permite que express entienda JSON en el cuerpo body de las peticiones
app.use(express.urlencoded({ extended: true })); // permite recibir datos de formularios HTML


// 4. ARCHIVOS ESTATICOS
// archivos accesibles desde el navegador
app.use(express.static(path.join(__dirname, 'public')));


// 5. IMPORTACION DE RUTAS
// Aqui conectamos los archivos de la carpeta 'routers'

// ruta de login
const autheRoutes = require('./routers/authe.routes');
// usamos la rutas de auth
app.use('/api/auth', autheRoutes);



// 6. LEVANTAR EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Coffee System esta corriendo en :http://localhost:${PORT}`);
})

