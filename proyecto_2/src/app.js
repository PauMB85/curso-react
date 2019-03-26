import React from 'react';
import ReactDOM from 'react-dom';
import Saludar from './components/Saludar';
import SaludarFunc from './components/SaludarFunc';
import Contador from './components/Contador'
import Mascota from './components/Mascota';
import {temaContext} from './contexts';

class  App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mascotas: ['perro', 'gato', 'canario'],
            colorTema:'white'
        }
    }

    //react no tiene un ngFor como en angular, hay que utilizar el map de js

    render() {
        const cmpMascotas = this.state.mascotas.map((m, pos) => 
            <Mascota key={pos} mascota={m} />
        );
        return (
            <div>
                <h1>Hola Mundo!</h1>
                <p>Me llamo Pau</p>
                {cmpMascotas}
                <temaContext.Provider value={this.state.colorTema}>
                    <Contador />
                </temaContext.Provider>
                <Saludar nombre="Pau"/>
                <Saludar nombre="Tomeu"/>
                <Saludar nombre="Quely"/>
                <Saludar />
                <SaludarFunc nombre="Manuee"/>
            </div>
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app') );