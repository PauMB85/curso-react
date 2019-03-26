import React from 'react';
import { connect } from 'react-redux';
import { addTarea } from '../store/tareas/actions'

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.dir(event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="nombre">Tarea:</label>
                    <input type="text" id="nombre" 
                        onChange={this.handleChange} value={this.state.nombre}/>
                    <button type="button" onClick={this.props.addTarea} >Guardar</button>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    addTarea
}

export default connect (mapStateToProps, mapDispatchToProps)(Formulario);