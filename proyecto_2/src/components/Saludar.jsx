import React from 'react';

/**
 * Las propiedades no pueden ser cambiadas por el componente (son solo de lectura)... debe ser por los estados.
 * De esta forma react sabe que ha habido un cambio para poder renderilarlo de nuevo.
 * defaultProps, para pasar propiedades por defecto
 */

export default class Saludar extends React.Component {
    render() {
        return  (
            <p>Hola {this.props.nombre}</p>
        )
    }
}

/**
 * declaración de una propiedad por defecto
 */
Saludar.defaultProps = {
    nombre: 'Mundo'
}