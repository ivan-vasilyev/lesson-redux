import Axios from 'axios';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

let nextId = 5;

export const requestTodos = () => {
    return {
        type: REQUEST_TODOS
    };
};

export const getTodos = async () => {
    let response;
    try {
         response = await Axios.get('http://localhost:5000/api/todos');
    } catch (error) {
        console.error(error.message);
    }

    return {
        type: GET_TODOS,
        todos: response.data
    };
};

export const addTodo = title => {
    return {
        type: ADD_TODO,
        id: nextId++,
        title
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const editTodo = (id, title) => {
    return {
        type: EDIT_TODO,
        id,
        title
    };
};