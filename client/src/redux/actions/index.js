import axios from 'axios'
export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_DOG_ID = "GET_DOG_ID"
export const GET_DOG_NAME = "GET_DOG_NAME"
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS"
export const POST_DOG = "POST_DOG"
export const FILTER_BYCREATED = "FILTER_BY_CREATED"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT"
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS"


const INFO_DB_URL = "http://localhost:3001/dogs"
const INFO_DOG_NAME = "http://localhost:3001/dogs?name="
const INFO_ALL_TEMPS = "http://localhost:3001/temperaments"

//Traigo todos los Dogs de la base de datos.

export const getAllDogs = () => async (dispatch) => {
    try {
        const dogs = await axios.get(INFO_DB_URL)
        dispatch({
            type: "GET_ALL_DOGS",
            payload: dogs.data
        })

    } catch (error) {
        return console.log(error)

    }

}

//Traigo el dog de la base de datos por id.

export const getDogId = (id) => async (dispatch) => {
    try {
        const dog = await axios.get(`${INFO_DB_URL}/${id}`)

        dispatch({
            type: "GET_DOG_ID",
            payload: dog.data
        })

    } catch (error) {
        return console.log(error)

    }
}
// Traigo los dog por nombre
export const getDogName = (name) => async (dispatch) => {
    try {
        const dogName = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        dispatch({
            type: "GET_DOG_NAME",
            payload: dogName.data
        })

    } catch (error) {
        console.log(error)
    }

}

//Traigo todos los temperamentos

export const getAllTemps = () => async (dispatch) => {
    try {
        const allTemps = await axios.get(INFO_ALL_TEMPS)
        dispatch({
            type: "GET_ALL_TEMPERAMENTS",
            payload: allTemps.data
        })

    } catch (error) {
        console.log(error)
    }


}

// Realizo la creacion de un nuevo dog
// export const postDog = (payload) => async (dispatch) => {
//     try {
//         const created = await axios.post(INFO_DB_URL, payload)
//       dispatch({
//             type: "POST_DOG",
//             payload: created.data
//         })
//     } catch (error) {
//         console.log(error)
//     }

// }
export function postDog(payload) {
    return async function () {
        const created = await axios.post(INFO_DB_URL, payload)
        return created
    }
}

//Filtrar los dogs por temperamentos
export function filterByTemp(payload) {
    return {
        type: "FILTER_BY_TEMPERAMENTS",
        payload
    }
}


// Filtar por dogs creados
export const filterByCreated = (payload) => {
    return {
        type: "FILTER_BY_CREATED",
        payload
    }
}

//Filtar dogs por nombre
export const orderName = (payload) => {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

//Filtrar dogs por peso
export const orderWeight = (payload) => {
    return {
        type: "ORDER_BY_WEIGHT",
        payload
    }
}

//Recargar 

