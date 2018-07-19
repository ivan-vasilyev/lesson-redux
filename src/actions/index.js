export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

let nextId = 5;

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