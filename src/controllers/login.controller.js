
// Manejo del login

//1. importar la capac de servicio
const loginService = require('../services/login.service');

//2. definicion de la funcion asincrona que controla el inicio de sesion
const login = async (req, res) => {
    try {
        //3. Extrae los datos limpios
        const { user, password } = req.body;

        //4. llama la logica de negocio (servicio)
        const usuario = await loginService.servicioVerificarLogin(user, password);

        //5. manejar el resultado SI HAY ERROR del negocio (servicio) 
        if (usuario.error) {
            console.error("Error recibido del SERVICIO")
            return res.status(401).json({ mensaje: usuario.error });
        }

        //6. respuesta exitosa del negocio (servicio)
        if (usuario) {
            console.log("Login exitoso para:", usuario.alias);

            return res.redirect('/index.html');
            // return res.status(200).json({ mensaje: "Inicio de sesion correcto", usuario: usuario.usuario });
        }

    } catch (error) {
        //7. gestión de errores esperados
        console.error("Error en el CONTROLADOR DE LOGIN", error);
        res.status(500).json({ mensaje: "error interno del servidor" })
    }
}


// 8. exportacion del controlador
module.exports = { login };











// capturar los datos del form de login
// const alias = "a"
// const pass = "123456"

// let mensaje;


// function validacion(alias, pass, mensaje) {

//     if (!alias || !pass) {
//         mensaje = "datos invalidos, validar nuevamente";
//     } else if (typeof alias !== "string") {
//         mensaje = "usuario invalido";
//     } else if (typeof pass !== "string") {
//         mensaje = "contraseña invalida";
//     } else if (alias.length < 4 && alias.length > 12) {
//         mensaje = "la contraseña excede la longitud permitida"
//     } else if (pass.length < 6 && pass.length > 12) {
//         mensaje = "la contraseña excede la longitud permitida"
//     } else {
//         // Se envian credenciales
//         mensaje = "bienvenido"
//     }

//     console.log(mensaje);


// }

// validacion(alias, pass, mensaje)

