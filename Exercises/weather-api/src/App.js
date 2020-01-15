import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import TodayWeather from "./TodayWeather";
import HourlyWeather from "./HourlyWeather";
// import FakeWeather from "./data/FakeWeather.json";
import storm from "../src/img/weather-icons/storm.svg";
import clear from "../src/img/weather-icons/clear.svg";
//import cloudy from "../src/img/weather-icons/cloudy.svg";
import drizzle from "../src/img/weather-icons/drizzle.svg";
import fog from "../src/img/weather-icons/fog.svg";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
//import partlycloudy from "../src/img/weather-icons/storm.svg";
import rain from "../src/img/weather-icons/rain.svg";
import snow from "../src/img/weather-icons/snow.svg";
import { isEmpty } from "lodash";
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
        pressure: data.list[1].main.pressure,
        nbId: data.list[1].weather[0].id
      }
    });
  }

  handle = () => {
    const cityName = this.state.cityName;
    let cond = true;
    if (isEmpty(cityName)) {
      return (cond = false);
    }
  };

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
        pressure: data.list[1].main.pressure,
        nbId: data.list[1].weather[0].id
      },
      list: data.list
    });
  };

  icon = nb => {
    if (nb < 300) {
      return storm;
    } else if (nb >= 300 && nb < 500) {
      return drizzle;
    } else if (nb >= 500 && nb < 600) {
      return rain;
    } else if (nb >= 600 && nb < 700) {
      return snow;
    } else if (nb >= 700 && nb < 800) {
      return fog;
    } else if (nb === 800) {
      return clear;
    } else if (nb === 801) {
      return fog;
    } else if (nb >= 801 && nb < 805) {
      return mostlycloudy;
    }
  };

  render() {
    return (
      <div className="app">
        <Nav
          onSubmit={this.onSubmit}
          cityName={this.state.cityName}
          handle={this.handle}
        ></Nav>
        <TodayWeather
          description={this.state.today.description}
          tempMin={this.state.today.tempMin}
          tempMax={this.state.today.tempMax}
          pressure={this.state.today.pressure}
          humidity={this.state.today.humidity}
          icon={this.icon}
          nbID={this.state.today.nbId}
        ></TodayWeather>
        <HourlyWeather list={this.state.list} icon={this.icon}></HourlyWeather>
      </div>
    );
  }
}
//16e9b24a3bbd12706f0661ba7c4a48d1
export default App;
