import axios from 'axios';

export default apiUrl => store => next => action => {
    if (!action.request) {
        return next(action);
    }

    const REQUEST = `${action.type}_REQUEST`;
    const SUCCESS = `${action.type}`;
    const FAILURE = `${action.type}_FAILURE`;

    next({ type: REQUEST });

    return axios[action.request.method](`${apiUrl}${action.request.url}`, action.request.body)
        .then(({data}) => next({
            type: SUCCESS,
            data
        }))
        .catch(error => next({
            type: FAILURE,
            error: error.message
        }));
};