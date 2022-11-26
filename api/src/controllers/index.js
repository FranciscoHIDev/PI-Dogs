const { Dog, Temperament } = require('../db')
const axios = require('axios')
const {
    MY_API_KEY
} = process.env

const API_ALL_URL = `https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`


const getApiInfo = async () => {
    const { data } = await axios.get(API_ALL_URL)

    const apiInfo = await data.map(el => {

        let temperamentArray = []
        if (el.temperament) {
            temperamentArray = el.temperament.split(", ")

        }
        let heightArray = []
        if (el.height.metric) {
            heightArray = el.height.metric.split(" - ")
        }
        let weightArray = []
        if (el.weight.metric) {
            weightArray = el.weight.metric.split(" - ")
        }
        return {
            id: el.id,
            name: el.name,
            height: heightArray,
            weight: weightArray,
            temperaments: temperamentArray,
            life_span: el.life_span,
            image: el.image.url
        }
    })
    return apiInfo

}

const getDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
}

const getAllDogs = async () => {

    const dataApi = await getApiInfo()
    const dataDb = await getDb()
    const allInfo = [...dataApi, ...dataDb]
    return allInfo


}

const getAllTemperaments = async () => {
    const { data } = await axios.get(API_ALL_URL)
    const temperaments = data.map(t => (t.temperament))
    const tps = temperaments.toString().split(",");
    tps.forEach(t => {
        let i = t.trim()
        Temperament.findOrCreate({ where: { name: i } });
    });
    const allTemperaments = await Temperament.findAll()
    return allTemperaments




}





module.exports = {
    getAllDogs,
    getAllTemperaments,
}