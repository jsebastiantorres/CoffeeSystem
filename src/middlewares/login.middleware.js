
// Validaciones para login

// Que los campos no esten vacios
const validarLogin = (req, res, next) => {
    // Que trae el body
    const { user, password } = req.body;

    // si alguno de los campos esta vacio
    if(!user || !password){
        return res.status(400).json({
            error: "Datos incompletos",
            detalle: "el usuario y la contraseña son obligatorias"
        });
    }

    // Si estan completos, continuar con el controller
    next();    
}


module.exports = {validarLogin}


// Que el campo de usuario tenga longitud de 5 y 12
// Que el campo de password tenga longitud de 4 y 12





