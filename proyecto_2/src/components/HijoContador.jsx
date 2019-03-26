import React from 'react';
import {temaContext} from '../contexts';

export default class HijoContador extends React.Component {

    handeClick(event) {
    }
    render() {
        return(
            <temaContext.Consumer>
                {
                    (temaColor) => (
                        <div style={{backgroundColor: temaColor}}>
                            <button onClick={() => handleclick('-')}>-</button>
                            <span>{this.props.cuenta}</span>
                            <button onClick={() => handleclick('+')}>+</button>
                        </div>
                    )
                }
            </temaContext.Consumer>
        )
    }
}