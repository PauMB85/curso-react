import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import NuevoUsuario from './componentes/NuevoUsuario';

const App = (props) => {
    return (
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/nuevo-usuario">nuevo usuario</Link>
            <hr />
            <Route exact path="/" component={Inicio}/>
            <Route path="/nuevo-usuario" component={NuevoUsuario}/>
        </div>
    )
}

ReactDom.render(<BrowserRouter><App /></BrowserRouter>,
    document.getElementById('app'));