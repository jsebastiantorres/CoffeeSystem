
// 1. importacion de la base de datos
const db = require('../config/db');

// 2. funciones de apoyo
const convertirMinusculas = (alias) => {
    let aliasMinuscula = alias.toLowerCase();
    return aliasMinuscula
}

// 3. funcion principal cosultar credenciales en base de datos
const servicioVerificarLogin = async (user, password) => {

    const alias = convertirMinusculas(user);

    // query para las creadenciales
    const [result] = await db.query(`SELECT * FROM user WHERE alias = ? AND password = ?`, [alias, password]);

    // si la db no retorna nada...
    if (!result || result.leght === 0) {
        return { error: "usuario o contraseña incorrectos" };
    }

    return result[0]

}


module.exports = { servicioVerificarLogin };