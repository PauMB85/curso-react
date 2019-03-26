import React from 'react';


/**
 * siempre hay que hacer un super, para obtener la propiedad this
 * El estado se puede modificar mientras que la propiedad no se puede modificar,
 * Los state se comparten con los hijos
 */

 /**
  * Flujo de datos
  * Los props arriba a bajo
  * Los eventos de abjo hacia arriba
  */

export default class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuenta: 0
        };
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
    }

    incrementar() {
        console.log('incrementar');
        this.setState({cuenta: this.state.cuenta + 1});
    }

    decrementar () {
        console.log('decrementar');
        this.setState({cuenta: this.state.cuenta - 1});
    }

    render() {
        return (
            
            <div >
                <button onClick={this.decrementar}>-</button>
                <span>{this.state.cuenta}</span>
                <button onClick={this.incrementar}>+</button>
            </div>
                
            
        )
    }
}