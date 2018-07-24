import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
import localstorage, { loadStorage } from '../middlewares/localstorage';

const initialState = loadStorage('todos');
const store = createStore(reducer, initialState, applyMiddleware(promise, thunk, logger, localstorage('todos')));

export default store;
