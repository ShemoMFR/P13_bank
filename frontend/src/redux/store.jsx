/* REDUX */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/* REDUCER */
import { reducerDataUser, reducerFetchDataUser } from './user/reducerUser';

/* rootReducer permet d'avoir deux states */
const rootReducer = combineReducers({
    connexion: reducerDataUser,
    userDatas: reducerFetchDataUser
})

/* applyMiddleware et thunk permet de gérer l'asynchrone de fetch */ 
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


