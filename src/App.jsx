import React from 'react';

// import { Clock } from '../src/components/Clock.jsx';
// import { Button } from '../src/components/Button.jsx';
// import { ListsAndKeys } from '../src/components/ListsAndKeys.jsx';
import { Forms } from '../src/components/Forms.jsx';

const App = () => {
    return (
        <div>
            {/* <Clock name="Mundo" date={new Date()} /> */}
            {/* <Button /> */}
            {/* <ListsAndKeys numbers={[1, 2, 3, 4, 5, 6, 7]} /> */}
            <Forms />
        </div>
    );
}

export { App };