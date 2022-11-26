import { GET_ALL_DOGS, GET_DOG_ID } from '../actions/index'
const initialState = {
    dogs: [],
    dog: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload

            }
        case GET_DOG_ID:
            return {
                ...state,
                dog: action.payload
            };
        default:
            return state;
    }
}



export default rootReducer;