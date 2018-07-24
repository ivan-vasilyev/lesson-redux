export function loadStorage(key = 'state') {
    try {
        const json = localStorage.getItem(key);
        
        if (json === null) {
            return undefined;
        } else {
            return JSON.parse(json);
        }

    } catch (error) {
        return undefined;
    } 
    
}

export default key => store => next => action => {
    let result = next(action);

    try {
        const json = JSON.stringify(key ? store.getState()[key] : store.getState());
        localStorage.setItem(key || 'state', json);
    } catch (error) {
        console.error(error);
    }

    return result;
};