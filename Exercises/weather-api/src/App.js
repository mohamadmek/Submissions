import React, { Component } from "react";
import "./App.css";
import storm from "../src/img/weather-icons/storm.svg";
import cloudy from "../src/img/weather-icons/partlycloudy.svg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <nav>
          <label for="city" className="label-city">
            <input type="text" name="city" className="city"></input>
          </label>
          <button className="btn-search">FIND WEATHER</button>
        </nav>
        <div className="container">
          <div className="today-container">
            <div className="today-icon">
              <img className="img" src={cloudy} alt="storm icon" />
            </div>
            <div className="today-txt">overcast clouds</div>
            <div className="mt-25">
              <span className="bold">Temperature</span>10 to 11C
            </div>
            <div className="mt-25">
              <span className="bold">Humidity</span> 78%
              <span className="bold2">Pressure</span> 1008.48
            </div>
          </div>
          <div className="line"></div>
          <div className="hourly-title">HOURLY</div>
          <div className="row">
            <div className="hours-weather b-r b-l b-rl">
              <div className="hour">03:00</div>
              <div className="icon">
                <img src={storm} alt="stormy"></img>
              </div>
              <div>8C</div>
            </div>
            <div className="hours-weather b-r b-rl">
              <div className="hour">03:00</div>
              <div className="icon">
                <img src={storm} alt="stormy"></img>
              </div>
              <div>8C</div>
            </div>
            <div className="hours-weather b-r b-rl">
              <div className="hour">03:00</div>
              <div className="icon">
                <img src={storm} alt="stormy"></img>
              </div>
              <div>8C</div>
            </div>
            <div className="hours-weather b-r b-l b-rl">
              <div className="hour">03:00</div>
              <div className="icon">
                <img src={storm} alt="stormy"></img>
              </div>
              <div>8C</div>
            </div>
            <div className="hours-weather b-r b-rl">
              <div className="hour">03:00</div>
              <div className="icon">
                <img src={storm} alt="stormy"></img>
              </div>
              <div>8C</div>
            </div>
            <div className="hours-weather b-r b-rl">
              <div className="hour">03:00</div>
              <div className="icon">
                <img src={storm} alt="stormy"></img>
              </div>
              <div>8C</div>
            </div>
            <div className="hours-weather  last b-rl">
              <div className="hour">03:00</div>
              <div className="icon">
                <img src={storm} alt="stormy"></img>
              </div>
              <div>8C</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
