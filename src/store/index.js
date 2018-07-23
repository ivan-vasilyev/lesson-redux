import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducer from '../reducers';

/* function addPromiseThunkSupport(store) {
    const dispatch = store.dispatch;
    
    return action => {
        if (typeof action.then === 'function') {
            return action.then(dispatch);
        } else if (typeof action === 'function') {
            return action(dispatch);
        }
        return dispatch(action);
    };
} */

const store = createStore(reducer, applyMiddleware(promise, thunk));

export default store;
