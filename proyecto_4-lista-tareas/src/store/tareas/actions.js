import * as ACTIONS from './action-types';

export default function addTarea (task) {
    return {
        type: ACTIONS.ADD,
        payload: task
    }
}

export default function deleteTarea (id) {
    return {
        type: ACTIONS.DEL,
        payload: id
    }
}

export default function doTarea (id) {
    return {
        type: ACTIONS.DO,
        payload: id
    }
}

export default function filterTarea (filterTxt) {
    return {
        type: ACTIONS.FILTER,
        payload: filterTxt
    }
}
