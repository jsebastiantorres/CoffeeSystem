
// Manejo del login


// capturar los datos del form de login
const alias = "a"
const pass = "123456"

let mensaje;


function validacion(alias, pass, mensaje) {

    if (!alias || !pass) {
        mensaje = "datos invalidos, validar nuevamente";
    } else if (typeof alias !== "string") {
        mensaje = "usuario invalido";
    } else if (typeof pass !== "string") {
        mensaje = "contraseña invalida";
    } else if (alias.length < 4 && alias.length > 12) {
        mensaje = "la contraseña excede la longitud permitida"
    } else if (pass.length < 6 && pass.length > 12) {
        mensaje = "la contraseña excede la longitud permitida"
    } else {
        // Se envian credenciales
        mensaje = "bienvenido"
    }

    console.log(mensaje);


}

validacion(alias, pass, mensaje)