import * as ACTIONS from './action-types';

const initialState = {
    lista: [{id: 0, nombre: 'Tarea 1', completada: false}],
    listaFiltrada: [],
    filtro: '',
    siguienteId: 1
};

function addTask(state, nombre) {
    
    const newTask = {id: state.siguienteId, nombre: nombre, completada:false};
    const newList = state.lista.concat(newTask);

    return Object.assign({}, state, {lista: newList, siguienteId:state.siguienteId+1});
}

export default function tareas (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return addTask(state,action.payload);
        case ACTIONS.DEL:
            return state;
        case ACTIONS.DO:
            return state;
        case ACTIONS.FILTER:
            return state;
        default:
            return state;
    }
}