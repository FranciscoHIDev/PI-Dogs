import { GET_ALL_DOGS, GET_DOG_ID, GET_DOG_NAME, GET_ALL_TEMPERAMENTS, POST_DOG, FILTER_BY_TEMPERAMENTS, ORDER_BY_NAME, ORDER_BY_WEIGHT } from '../actions/index'

const initialState = {
    dogs: [],
    dogDetail: [],
    dogName: [],
    temperaments: []
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
                dogDetail: action.payload
            };
        case GET_DOG_NAME:
            return {
                ...state,
                dogName: action.payload


            };
        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            };
        case POST_DOG:
            return {
                ...state,
                dogs: [...state.dogs, action.payload]
            };
        case FILTER_BY_TEMPERAMENTS:
            const filterByTemp = state.dogs.filter((d) => d.temperaments?.include(action.payload))
            return {
                ...state,
                dogs: filterByTemp
            };
        case ORDER_BY_NAME:
            const orderName = action.payload === 'acs' ? state.dogs.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1
                return 0
            }) : state.dogs.sort((a, b) => {
                if (a.name < b.name) return 1
                if (a.name > b.name) return -1
                return 0
            })
            return {
                ...state,
                dogs: orderName
            };
        case ORDER_BY_WEIGHT:
            const orderWeight = action.payload === "weightMin"
                ? state.dogs.sort(function (a, b) {
                    if (typeof action.payload.weight === 'string') {
                        if (a.weight > b.weight) return 1
                        if (a.weight < b.weight) return -1
                        return 0
                    } else {
                        if (parseInt(a.weight) > parseInt(b.weight)) return 1
                        if (parseInt(a.weight) < parseInt(b.weight)) return -1
                        return 0
                    }
                })
                :
                state.dogs.sort(function (a, b) {
                    if (typeof action.payload.weight === 'string') {
                        if (a.weight < b.weight) return 1
                        if (a.weight > b.weight) return -1
                        return 0
                    } else {
                        if (parseInt(a.weight) < parseInt(b.weight)) return 1
                        if (parseInt(a.weight) > parseInt(b.weight)) return -1
                        return 0
                    }
                })
            return {
                ...state,
                dogs: orderWeight
            };



        default:
            return state;
    }
}



export default rootReducer;