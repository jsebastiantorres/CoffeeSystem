//1. Importa express
const express = require('express')

//2. Crear una instacia del router
const router = express.Router();

//3. importar middleware (validaciones)
const loginMiddleware = require('../middlewares/login.middleware');

//4. importar controlador
const loginController = require('../controllers/login.controller');

//5. definir la ruta (post para credenciales y sin parametros dinamicos)
console.log("respuesta desde router login")
router.post('/login', loginMiddleware.validarLogin, loginController.login);

//6. exportar la ruta
module.exports = router;