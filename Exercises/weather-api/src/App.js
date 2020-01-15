import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import TodayWeather from "./TodayWeather";
import HourlyWeather from "./HourlyWeather";
// import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "london",
      list: [],
      today: {}
    };
  }
  async componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&cnt=8&units=metric&appid=16e9b24a3bbd12706f0661ba7c4a48d1`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      list: data.list,
      today: {
        description: data.list[1].weather[0].description,
        temp: data.list[1].main.temp,
        tempMax: data.list[1].main.temp_max,
        tempMin: data.list[1].main.temp_min,
        humidity: data.list[1].main.humidity,
        pressure: data.list[1].main.pressure
      }
    });
  }

  onSubmit = async e => {
    this.setState({
      cityName: e
    });
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${e}&cnt=8&units=metric&appid=16e9b24a3bbd12706f0661ba7c4a48d1`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      today: {
        description: data.list[1].weather[0].description,
        temp: data.list[1].main.temp,
        tempMax: data.list[1].main.temp_max,
        tempMin: data.list[1].main.temp_min,
        humidity: data.list[1].main.humidity,
        pressure: data.list[1].main.pressure
      },
      list: data.list
    });
  };

  render() {
    return (
      <div className="app">
        <Nav onSubmit={this.onSubmit} cityName={this.state.cityName}></Nav>
        <TodayWeather
          description={this.state.today.description}
          tempMin={this.state.today.tempMin}
          tempMax={this.state.today.tempMax}
          pressure={this.state.today.pressure}
          humidity={this.state.today.humidity}
        ></TodayWeather>
        <HourlyWeather list={this.state.list}></HourlyWeather>
      </div>
    );
  }
}
//16e9b24a3bbd12706f0661ba7c4a48d1
export default App;
