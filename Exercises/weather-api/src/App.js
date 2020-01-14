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
      cityName: "",
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

  onSubmit = async txt => {
    console.log("text", txt);
    this.setState({
      cityName: txt
    });
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${txt}&cnt=8&units=metric&appid=16e9b24a3bbd12706f0661ba7c4a48d1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
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
  };

  render() {
    return (
      <div className="app">
        <Nav onSubmit={this.onSubmit}></Nav>
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
//16e9b24a3bbd12706f0661ba7c4a48d1
export default App;
