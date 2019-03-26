import * as ACTIONS from './action-types';

const initialState = {
    lista: [{id: 0, nombre: 'Tarea 1', completada: false}],
    listaFiltrada: [],
    filtro: ''
};

export default function tareas (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return state;
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