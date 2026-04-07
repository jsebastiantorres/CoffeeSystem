
const mysql = require('mysql2/promise');

// pool de conexión
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'coffee_pruebas',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


// Exportacion de la conexión
module.exports = pool;


// verificacion de la conexion
pool.getConnection().then(connection => {
        console.log(`Conexión exitosa a base de datos`);
        connection.release(); // para liberar el pool
    }).catch(err => {
        console.error('No se pudo establecer conexión con la base de datos', err.code);
        console.error('Mensaje: ', err.messaje);
        
    });


