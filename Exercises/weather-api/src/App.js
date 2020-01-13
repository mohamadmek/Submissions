import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import TodayWeather from "./TodayWeather";
import HourlyWeather from "./HourlyWeather";
import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "h"
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );
    const data = await response.json();
    console.log(data);
    this.setState = {
      description: ""
    };
  }

  render() {
    return (
      <div className="app">
        {/* <Nav></Nav> */}
        <span>{this.state.description}</span>
        {/*  <TodayWeather description={this.state.description}></TodayWeather> */}
        {/*  <HourlyWeather></HourlyWeather> */}
      </div>
    );
  }
}

export default App;
