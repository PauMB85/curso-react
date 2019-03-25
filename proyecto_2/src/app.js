import React from 'react';
import ReactDOM from 'react-dom';
import Saludar from './components/Saludar';
import SaludarFunc from './components/SaludarFunc';
import Contador from './components/Contador'

const App = (props) => {
    return (
        <div>
            <h1>Hola Mundo!</h1>
            <p>Me llamo Pau</p>
            <Saludar nombre="Pau"/>
            <Saludar nombre="Tomeu"/>
            <Saludar nombre="Quely"/>
            <Saludar />
            <SaludarFunc nombre="Manuee"/>
            <Contador />
        </div>
        
    );
}

ReactDOM.render(<App />, document.getElementById('app') );