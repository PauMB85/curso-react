import { INCREMENTAR, DECREMENTAR } from './action-types';

//actions creators
export function decrementar() {

    // action object
    return {
        type: DECREMENTAR
    }
}

export function incrementar() {
    return {
        type: INCREMENTAR
    }
}