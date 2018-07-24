import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(promise, thunk, logger));

/* const addPromiseSupport = store => next => action => {
    if (typeof action.then === 'function') {
        return action.then(next);
    } 
    return next(action);
};

const addThunkSupport = store => next => action => {
    if (typeof action === 'function') {
        return action(next);
    }
    return next(action);
};


const addLogSupport = store => next => action => {
    console.log(`Состояние до `, store.getState());
    console.log(`Действие `, action.type, action);
    let result = next(action);
    console.log(`Состояние после `, store.getState());
    return result;
};

function applyMiddleware(store, ...middlewares) {
    middlewares.slice().reverse().forEach(middleware => store.dispatch = middleware(store)(store.dispatch));
}

applyMiddleware(store, addLogSupport, addPromiseSupport, addThunkSupport); */

export default store;
