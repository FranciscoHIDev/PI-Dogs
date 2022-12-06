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
            res.status(400).send("Dog con ese ID no encontrado")
        }


    } catch (error) {
        res.status(400).send(error)
    }


})


router.post('/', async (req, res) => {

    const { name, height, weight, life_span, image, temperament } = req.body

    if (!name|| !height || !weight || !life_span || !temperament) {
        return res.status(400).send("¡Faltan datos por completar!")
    }
    try {
        let newDog = await Dog.create({
            name,
            height,
            weight,
            life_span,
            image: image ? image : "https://www.nationalgeographic.com.es/medio/2019/06/13/_db0c0e4b_800x800.jpg"
        })
        let associatedTemp = await Temperament.findAll({
            where: { name: temperament }
        })
        newDog.addTemperament(associatedTemp)
        res.status(200).send(newDog)


    } catch (error) {
        res.status(400).send(error + "Ocurrio un error")

    }

})

module.exports = router;