import React from 'react';

const ListItem = (props) => (<li>{props.value}</li>);

const ListsAndKeys = (props) => {

    const numbers = props.numbers;

    return (
        <ul>
            {
                numbers.map(
                    (num, index) => <ListItem key={`${index}`} value={num * num} />
                )
            }
        </ul>
    );
}


export { ListsAndKeys };