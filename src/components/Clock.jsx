import React, { Component, useState, useEffect } from 'react';

// const Clock = (props) => {

//     const [date, setState] = useState(props.date);

//     const updateTime = () => setState(new Date());

//     useEffect(() => {
//         console.log("Crea el intervalo");
//         setInterval(updateTime, 1000);
//     }, []);

//     useEffect(() => {
//         return () => {
//             console.log('Elimina el intervalo');
//             clearInterval(updateTime);
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Hola {props.name}</h1>
//             <h2>{date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
        };
    }

    componentDidMount() {
        this.updateTime = setInterval(
            () => this.setState(prevState => {
                console.log('Prev state:', prevState);
                return {
                    date: new Date()
                };
            }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.updateTime);
    }

    render() {
        return (
            <div>
                <h1>Hola {this.props.name}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export { Clock };