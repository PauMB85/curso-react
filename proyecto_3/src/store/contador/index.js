import { INCREMENTAR, DECREMENTAR } from "./action-types";

//aqui nos creamos el redux

export function contador(state = 0, action) {
    switch (action.type) {
        case INCREMENTAR:
            return state+1;
        case DECREMENTAR:
            return state-1;
        default:
            return state;
    }
}