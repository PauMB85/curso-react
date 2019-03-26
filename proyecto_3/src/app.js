import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './components/Contador';

import { Provider } from 'react-redux';
import configurarStore from './store/config-store';

//const App = (props) => {
//    return (
//        <h1>Hola Mundo!</h1>
//    );
//}

const store = configurarStore();

ReactDOM.render( <Provider store={store}><Contador /></Provider>, document.getElementById('app') );