import {createStore,applyMiddleware} from 'redux';

 import thunk from 'redux-thunk';
 import logger from 'redux-logger';
import { RootReducer} from '../reducers/RootReducer';
let store=createStore(RootReducer,applyMiddleware(thunk,logger));
export default store;