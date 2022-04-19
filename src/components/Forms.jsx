import React, { useState } from 'react';

const Forms = (props) => {
    const [formState, setState] = useState({ input: '', select: '2', isGoing: false });

    const onChange = (evt) => {
        const target = evt.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState(prevFormState => ({ ...prevFormState, [name]: value }));
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(formState);
        alert(`INPUT: ${formState.input} SELECT: ${formState.select}, ISGOING: ${formState.isGoing}`);
    }

    return (
        <form onSubmit={onSubmit}>
            Input:
            <input name="input" type="text" value={formState.input} onChange={onChange} />
            <br />
            Select:
            <select name="select" value={formState.select} onChange={onChange}>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
            <br />
            Is going:
            <input
                name="isGoing"
                type="checkbox"
                checked={formState.isGoing}
                onChange={onChange} />
            <br />
            <button type="submit">Enviar</button>
        </form >
    );
}

export { Forms };