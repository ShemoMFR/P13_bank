import { CONNEXION, CONNEXION_FAILURE, GET_DATA_USER, GET_DATA_FAILED } from './type';

const initialState = {
    token : '',
    error: '',
    isConnected: false
}

const dataUser = {
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    error: ''
}

export const reducerDataUser = (state = initialState, action) => {
    switch (action.type) {
        case CONNEXION:
            return {
                ...state,
                token: action.payload,
                isConnected: true
            }
        case CONNEXION_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export const reducerFetchDataUser = (state = dataUser, action) => {
    switch (action.type) {
        case GET_DATA_USER:
            return {
                ...state,
                email: action.payload.email,
                firstName: action.payload.firstName,
                id: action.payload.id,
                lastName: action.payload.lastName
            }
        case GET_DATA_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

