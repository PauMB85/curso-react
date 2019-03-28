import React from 'react';

class Usuario extends React.Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.usuario.nombre}</p>

            </div>
        )
    }
}

export default Usuario;