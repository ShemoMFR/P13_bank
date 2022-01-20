/* REDUX */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/* REDUCER */
import reducerDataUser from './user/reducerUser';

const store = createStore(reducerDataUser, applyMiddleware(thunk));

export default store;


