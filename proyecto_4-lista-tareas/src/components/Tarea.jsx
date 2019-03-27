import React from 'react';
import { connect } from 'react-redux';
import { deleteTarea, doTarea } from '../store/tareas/actions'

class Tarea extends React.Component {

    constructor(props) {
        super(props)
        this.eliminar = this.eliminar.bind(this);
        this.hacer = this.hacer.bind(this);
    }

    hacer() {
        this.props.doTarea(this.props.tarea.id);

    }

    eliminar(){
        this.props.deleteTarea(this.props.tarea.id);
    }
    render() {
        return (
                <div >
                     {this.props.tarea.nombre}
                     <button type="button" onClick={this.hacer} >{this.props.tarea.completada ? 'Deshacer' : 'Hecha'}</button>
                     <button type="button" onClick={this.eliminar} >Eliminar</button>
                </div>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    deleteTarea,
    doTarea
}

export default connect (mapStateToProps, mapDispatchToProps)(Tarea);