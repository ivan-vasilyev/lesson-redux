import { combineReducers } from 'redux';
import { default as todos } from './todos';
import { default as filter } from './filter';
import { default as fetching } from './fetching';

const reducer = combineReducers({
    todos,
    filter,
    fetching
});

export default reducer;
