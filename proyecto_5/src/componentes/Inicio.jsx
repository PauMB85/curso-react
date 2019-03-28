import React from 'react';
import Usuario from './Usuario';

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [
            {id: 1, nombre:'robb,'},
            {id: 2, nombre:'arya,'},
            {id: 3, nombre:'rimsay,'}
        ]}
    }
    render() {
        console.log(this.props);
        const usuarios = this.state.usuarios.map(u => {
            return <Usuario key={u.id} usuario={u} />
        });
        return (
            <div>
                <h1>Inicio</h1>
                {usuarios}
            </div>
        )
    }
}

export default Inicio;