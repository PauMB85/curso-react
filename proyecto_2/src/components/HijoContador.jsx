import React from 'react';

export default class HijoContador extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.onHandlerDecrementar}>-</button>
                <span>{this.props.cuenta}</span>
                <button onClick={this.props.onHandlerIncrementar}>+</button>
            </div>
        )
    }
}