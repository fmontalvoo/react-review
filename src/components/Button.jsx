import React, { useState, useEffect } from 'react';

const Button = (props) => {

    const [isTurningOn, setState] = useState(true);

    const onClick = () => {
        console.log('¡clic!');
        setState(!isTurningOn);
    }

    return (
        <button onClick={onClick}>
            {isTurningOn ? 'ON' : 'OFF'}
        </button>
    );
}

export { Button }