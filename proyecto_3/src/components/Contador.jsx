import React from 'react';
import { connect } from 'react-redux';
import { incrementar, decrementar} from '../store/contador/actions';

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

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuenta: 0
        };
        //this.incrementar = this.incrementar.bind(this)
        //this.decrementar = this.decrementar.bind(this)
    }

    /*incrementar() {
        console.log('incrementar');
        this.setState({cuenta: this.state.cuenta + 1});
    }

    decrementar () {
        console.log('decrementar');
        this.setState({cuenta: this.state.cuenta - 1});
    }*/

    render() {
        return (
            
            <div >
                <button onClick={this.props.decrementar}>-</button>
                <span>{this.props.cuenta}</span>
                <button onClick={this.props.incrementar}>+</button>
            </div>
                
            
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {cuenta: state.contador};
}

const mapDispatchToProps = {
    incrementar,
    decrementar
}
export default connect (mapStateToProps, mapDispatchToProps)(Contador);