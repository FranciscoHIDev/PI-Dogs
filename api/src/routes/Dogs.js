const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const { getAllDogs } = require('../controllers/index.js')
const router = Router()

router.get('/', async (req, res) => {
    const { name } = req.query
    const dogs = await getAllDogs()

    try {
        if (name) {
            const dogName = dogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
            dogName.length ? res.status(200).send(dogName) :
                res.status(400).send("Dog no encontrado")
        } else {
            res.status(200).send(dogs)
        }
    } catch (error) {
        res.status(400).send(error)

    }

})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const dogs = await getAllDogs()
        const dog = dogs.filter(dog => dog.id == id)
        if (dog.length) {
            res.status(200).send(dog)
        } else {
            res.status(404).send("Dog con ese ID no encontrado")
        }


    } catch (error) {
        res.status(400).send(error)
    }


})


router.post('/', async (req, res) => {
    const { name, height, weight, temperament, life_span, image } = req.body

    try {
        if (!name, !height, !weight, !temperament, !life_span, !image) {
            return res.status(400).send("¡Faltan datos por completar!")
        } else {
            let dog = await Dog.create({
                name,
                height,
                weight,
                life_span,
                image: image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjDd9EDL6VoNdUZyy9TcCDBr9l3X56PvySw&usqp=CAU"
            })
            let associatedTemp = await Temperament.findAll({
                where: { name: temperament }
            })
            dog.addTemperament(associatedTemp)
            res.status(200).send("¡Dog creado exitosamente!")
        }

    } catch (error) {
        res.status(400).send(error)

    }

})

module.exports = router;