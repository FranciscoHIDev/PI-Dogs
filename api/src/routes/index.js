const { Router } = require('express');
// Importar todos los routers;
const dogsRoute = require('./Dogs.js')
const temperamentsRoute = require('./Temperaments')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRoute)
router.use('/temperaments', temperamentsRoute)


module.exports = router;
