import React from 'react';

export default class Tarea extends React.Component {
    render() {
        return (
            <div > {this.props.tarea.nombre} : {this.props.tarea.completada ? 'Hecha' : 'Sin hacer'}</div>
        )
    }
}