import React from 'react';


export default class Saludar extends React.Component {
    render() {
        return  (
            <p>Hola {this.props.nombre}</p>
        )
    }
}