import React from 'react';
import { connect } from 'react-redux';

class ListaTareas extends React.Component {
    render() {
        const tareas = this.props.tareas.map( t => <li key={t.id}> {t.nombre} : 
            {t.completada ? 'Hecha' : 'Sin hacer'}</li>);
        return (
            <dir>
                {tareas}
            </dir>
        )
    }
}

const mapStateToProps = (state) => {
    return {tareas: state.tareas.lista};
}

export default connect(mapStateToProps)(ListaTareas);