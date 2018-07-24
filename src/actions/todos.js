export const REQUEST_TODOS = 'REQUEST_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const getTodos = () => {
    return {
        type: GET_TODOS,
        request: {
            method: 'get',
            url: '/todos'
        }
    };
};

export const addTodo = title => {
    return {
        type: ADD_TODO,
        request: {
            method: 'post',
            url: '/todos',
            body: {
                title
            }
        }
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        request: {
            method: 'delete',
            url: `/todos/${id}`
        }
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        request: {
            method: 'patch',
            url: `/todos/${id}` 
        }
    };
};

export const editTodo = (id, title) => {
    return {
        type: EDIT_TODO,
        request: {
            method: 'put',
            url: `/todos/${id}`,
            body: {  
                title
            }
        }
    };
};