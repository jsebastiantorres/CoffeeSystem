

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
app.use(express.json()) // permite que express entienda JSON en el cuerpo body de las peticiones del from
app.use(express.urlencoded({ extended: true })); // permite recibir datos de formularios HTML


// 4. REDIRECCIONAMIENTO INICIAL AL LOGIN
app.get('/', (req, res) => {
    res.redirect('/login.html');
});


// 5. ARCHIVOS ESTATICOS
// archivos accesibles desde el navegador
app.use(express.static(path.join(__dirname, 'public')));

// 6. IMPORTACION DE RUTAS
// Aqui conectamos los archivos de la carpeta 'routers'

// ruta de autenticacion
const auth = require('./routers/login.routes');
// usamos la rutas de authenticacion 
app.use('/api/auth', auth);


// 7. LEVANTAR EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Coffee System esta corriendo en :http://localhost:${PORT}`);
})


