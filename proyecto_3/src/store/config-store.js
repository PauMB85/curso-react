import { createStore, combineReducers} from 'redux';
import { contador } from './contador';

//aqui nos creamos el store

export default function configurarStore() {
    const reducer = combineReducers({contador});
    return createStore(reducer);
}