//1. Importa express
const express = require('express')

//2. Crear una instacia del router
const router = express.Router();

//3. importar controlador
// const autheController = require('../controllers/authe.controller');

//4. importar middleware (validaciones)
// const authMiddleware = require('../middlewares/authe.middleware');

//5. definir la ruta (post para credenciales y sin parametros dinamicos)
// router.post('/login', authMiddleware, autheController);

//6. exportar la ruta
module.exports = router;