import React from 'react';
import { connect } from 'react-redux';
import { filterTarea } from '../store/tareas/actions';

class Filtrar extends React.Component {

    constructor(props) {
        super(props);
        this.filterTasks = this.filterTasks.bind(this);
    }

    filterTasks(event) {
        this.props.filterTarea(event.target.value);
    }

    render() {
        return (
            <div>
                <label htmlFor="filtro">Filtrar por:</label>
                <input type="text" id="filtro" value={this.props.textoAFiltrar} 
                    onChange={this.filterTasks}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        textoAFiltrar: state.filtro
    }
};

const mapDispatchToProps = {
    filterTarea
}

export default connect (mapStateToProps, mapDispatchToProps)(Filtrar);