import { createStore, combineReducers, applyMiddleware} from 'redux';
import tareas from './tareas';
import thunk  from 'redux-thunk';


const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('Se va a lanzar el action: ', action);
            next(action);
        }
    }
}

export default function configurarStore() {
    const reducer = combineReducers({
        tareas
    });



    return createStore(reducer, applyMiddleware(logger,thunk));
}