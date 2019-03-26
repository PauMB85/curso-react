import { createStore, combineReducers} from 'redux';
import tareas from './tareas';

export default function configurarStore() {
    const reducer = combineReducers({
        tareas
    });
    return createStore(reducer);
}