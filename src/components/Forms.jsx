import React, { useState } from 'react';

const Forms = (props) => {
    const [value, setState] = useState({ input: '', select: '2' });

    const onChange = (evt) => setState({ ...value, input: evt.target.value });

    const onSelect = (evt) => setState({ ...value, select: evt.target.value });

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(value);
        alert(`INPUT: ${value.input} SELECT: ${value.select}`);
    }

    return (
        <form onSubmit={onSubmit}>
            Input:
            <input type="text" value={value.input} onChange={onChange} />
            <br />
            Select:
            <select value={value.select} onChange={onSelect}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
}

export { Forms };