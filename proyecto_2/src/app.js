import React from 'react';
import ReactDOM from 'react-dom';
import Saludar from './components/Saludar';
import SaludarFunc from './components/SaludarFunc';
import Contador from './components/Contador'
import Mascota from './components/Mascota';

const App = (props) => {
    const mascotas = ['perro', 'gato', 'canario'];

    //react no tiene un ngFor como en angular, hay que utilizar el map de js

    const cmpMascotas = mascotas.map((m, pos) => 
        <Mascota key={pos} mascota={m} />
    );
    return (
        <div>
            <h1>Hola Mundo!</h1>
            <p>Me llamo Pau</p>
            {cmpMascotas}
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