import * as ACTIONS from './action-types';

const initialState = {
    lista: [{id: 0, nombre: 'Tarea 1', completada: false}],
    listaFiltrada: [{id: 0, nombre: 'Tarea 1', completada: false}],
    filtro: '',
    siguienteId: 1
};

function addTask(state, newTask) {
    const newList = state.lista.concat(newTask);

    return Object.assign({}, state, {lista: newList,listaFiltrada: newList,filtro: state.filtro, siguienteId:state.siguienteId+1});
}

function filter(state,texto) {
    console.log(texto);
    if(texto.trim()){
        const nuevaListaFiltrada = state.lista.filter(t => t.nombre.includes(texto));
        return Object.assign({}, state, {listaFiltrada: nuevaListaFiltrada, filtro: texto.trim()});
    }else {
        return Object.assign({}, state, {listaFiltrada: state.lista, filtro: ''});
    }
}

function doTask(state, idTarea) {
    const newList = state.lista.map(t => {
        if(t.id === idTarea) {
            return {id:t.id, nombre: t.nombre, completada: !t.completada}
        }
        return t;
    });
    return Object.assign({}, state, {lista: newList});
}

function deleteTask(state, idTarea){
    
    const newList = state.lista.filter( t => {
        return t.id !== idTarea;
    });

    return Object.assign({}, state, {lista: newList});
}

export default function tareas (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return addTask(state,action.payload);
        case ACTIONS.DEL:
            return deleteTask(state, action.payload);
        case ACTIONS.DO:
            return doTask(state, action.payload);
        case ACTIONS.FILTER:
            return filter(state,action.payload);
        default:
            return state;
    }
}