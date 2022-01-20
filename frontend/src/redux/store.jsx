/* REDUX */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/* REDUCER */
import { reducerDataUser, reducerFetchDataUser } from './user/reducerUser';

const rootReducer = combineReducers({
    connexion: reducerDataUser,
    userDatas: reducerFetchDataUser
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


