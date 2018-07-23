import { REQUEST_TODOS, GET_TODOS } from "../actions";

export default function reducer(state = false, action) {
    switch(action.type) {
        case REQUEST_TODOS: 
            return true;

        case GET_TODOS:
            return false;

        default: 
            return state;
    }
}