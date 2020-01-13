import React, { Component } from "react";
import "./App.css";
import storm from "../src/img/weather-icons/storm.svg";
import cloudy from "../src/img/weather-icons/partlycloudy.svg";
import Nav from "./Nav";
import TodayWeather from "./TodayWeather";
import HourlyWeather from "./HourlyWeather";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Nav></Nav>
        <TodayWeather></TodayWeather>
        <HourlyWeather></HourlyWeather>
      </div>
    );
  }
}

export default App;
