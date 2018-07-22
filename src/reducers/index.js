import { combineReducers } from 'redux';
import { default as todos } from './todos';
import { default as filter } from './filter';

const reducer = combineReducers({
    todos,
    filter
});

export default reducer;
