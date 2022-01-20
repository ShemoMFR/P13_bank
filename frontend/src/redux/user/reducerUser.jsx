import { CONNEXION, CONNEXION_FAILURE } from './type';

const initialState = {
    token : '',
    error: ''
}

const reducerDataUser = (state = initialState, action) => {
    switch (action.type) {
        case CONNEXION:
            return {
                ...state,
                token: action.payload
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

export default reducerDataUser;
