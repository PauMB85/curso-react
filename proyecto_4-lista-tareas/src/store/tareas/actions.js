import * as ACTIONS from './action-types';

export function addTarea (task) {
    return {
        type: ACTIONS.ADD,
        payload: task
    }
}

export function deleteTarea (id) {
    return {
        type: ACTIONS.DEL,
        payload: id
    }
}

export function doTarea (id) {
    return {
        type: ACTIONS.DO,
        payload: id
    }
}

export function filterTarea (filterTxt) {
    return {
        type: ACTIONS.FILTER,
        payload: filterTxt
    }
}
