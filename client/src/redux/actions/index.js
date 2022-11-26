import axios from 'axios'
export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_DOG_ID = "GET_DOG_ID"


const INFO_DB_URL = "http://localhost:3001/dogs"

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