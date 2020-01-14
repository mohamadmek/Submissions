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
      description: "",
      today: {
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        pressure: ""
      }
    };
  }

  componentDidMount() {
    this.setState({
      description: FakeWeather.list[0].weather[0].description,
      today: {
        temp: FakeWeather.list[0].main.temp,
        tempMax: FakeWeather.list[0].main.temp_max,
        tempMin: FakeWeather.list[0].main.temp_min,
        humidity: FakeWeather.list[0].main.humidity,
        pressure: FakeWeather.list[0].main.pressure
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Nav></Nav>
        <TodayWeather
          description={this.state.description}
          tempMin={this.state.today.tempMin}
          tempMax={this.state.today.tempMax}
          pressure={this.state.today.pressure}
          humidity={this.state.today.humidity}
        ></TodayWeather>
        <HourlyWeather temp={this.state.today.temp}></HourlyWeather>
      </div>
    );
  }
}

export default App;
