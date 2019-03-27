import * as ACTIONS from './action-types';
import axios from 'axios';

const URL = 'https://todo-list-603ba.firebaseio.com/tasks8';

export function addTarea(task){
    return (dispatch) => {
        axios.post(`${URL}.json`, {completada:false, nombre: task})
        .then(resp => {
            console.log(resp);
            const miTask = {id:resp.data.name, nombre: task, completada:false};
            dispatch(dispatchAddTarea (miTask))
        });
    }
}

export function dispatchAddTarea (task) {
    return {
        type: ACTIONS.ADD,
        payload: task
    }
}

export function deleteTarea(id) {
    return (dispatch => {
        axios.delete(`${URL}/${id}.json`)
        .then(()=> {
            dispatch(dispatchDeleteTarea(id));
        })
    })
}

export function dispatchDeleteTarea (id) {
    return {
        type: ACTIONS.DEL,
        payload: id
    }
}

export function dispatchDoTarea (id) {
    return {
        type: ACTIONS.DO,
        payload: id
    }
}

export function dispatchFilterTarea (filterTxt) {
    return {
        type: ACTIONS.FILTER,
        payload: filterTxt
    }
}
