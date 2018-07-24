import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
import localstorage, { loadStorage } from '../middlewares/localstorage';
import apiMiddleware from '../middlewares/api';

const initialState = loadStorage();
const store = createStore(reducer, initialState, applyMiddleware(apiMiddleware('http://localhost:5000/api'),promise, thunk, logger, localstorage('todos')));

export default store;
