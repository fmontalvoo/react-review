import React from "react";

// import { Clock } from '../src/components/Clock.jsx';
// import { Button } from '../src/components/Button.jsx';
// import { ListsAndKeys } from '../src/components/ListsAndKeys.jsx';
// import { Forms } from '../src/components/Forms.jsx';
import { Calculator } from "../src/components/Calculator.jsx";

const App = () => {
  return (
    <div>
      {/* <Clock name="Mundo" date={new Date()} /> */}
      {/* <Button /> */}
      {/* <ListsAndKeys numbers={[1, 2, 3, 4, 5, 6, 7]} /> */}
      {/* <Forms /> */}
      <Calculator />
    </div>
  );
};

export { App };
