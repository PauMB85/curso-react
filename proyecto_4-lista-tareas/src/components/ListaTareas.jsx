import React from 'react';
import { connect } from 'react-redux';
import Tarea from './Tarea';

class ListaTareas extends React.Component {
    render() {
        const tareas = this.props.tareas.map( t => <Tarea key={t.id} tarea={t}/>);
        return (
            <dir>
                {tareas}
            </dir>
        )
    }
}

const mapStateToProps = (state) => {
    return {tareas: state.tareas.listaFiltrada};
}

export default connect(mapStateToProps)(ListaTareas);