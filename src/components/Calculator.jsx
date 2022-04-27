import React, { Component, useEffect, useState } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

function tryToCovert(temperature, convertFunction) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertFunction(input);
  const round = Math.round(output * 1000) / 1000;
  return `${round}`;
}

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

const TemperatureInput = (props) => {
  const scale = props.scale;
  const temperature = props.temperature;

  //   const [temperature, setState] = useState("");

  const handleChange = (evt) => {
    //   setState(evt.target.value);
    props.onTemperatureChange(evt.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({ temperature: temperature, scale: "c" });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ temperature: temperature, scale: "f" });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const celsius = scale === "f"
      ? tryToCovert(temperature, toCelsius)
      : temperature;
    const fahrenheit = scale === "c"
      ? tryToCovert(temperature, toFahrenheit)
      : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export { Calculator };
