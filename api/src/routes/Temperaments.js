const { Router } = require('express');
const { getAllTemperaments } = require('../controllers/index.js')

const router = Router()


router.get('/', async (req, res) => {
    try {
        const temps = await getAllTemperaments()
        res.status(200).send(temps)

    } catch (error) {
        res.status(404).send(error)
    }

})






module.exports = router;