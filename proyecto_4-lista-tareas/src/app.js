import React from 'react';
import ReactDOM from 'react-dom';
import configurarStore from './store/config-store';
import { Provider } from 'react-redux';
import ListaTareas from './components/ListaTareas';
import Formulario from './components/Formulario';
import Filtro from './components/Filtro';



const store = configurarStore();

const App = (props) => {
    return (
        <React.Fragment>
            <ListaTareas/>
            <hr />
            <Formulario />
            <hr />
            <Filtro />
        </React.Fragment>
    );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app') );