import React from 'react';

/** Component funcional, se utilizan para mostrar, no deberían tener lógica */

/**
 * 
 * desestructuración objeto (nombre)
 */
const SaludarFunc = ({nombre}) => {
    return (
        <p>(Func) Hola {nombre}</p>
    )
}

export default SaludarFunc;