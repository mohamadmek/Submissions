import React from "react";
import "./App.css";
import cloudy from "../src/img/weather-icons/partlycloudy.svg";
export default function TodayWeather(props) {
  return (
    <div className="container">
      <div className="today-container">
        <div className="today-icon">
          <img className="img" src={cloudy} alt="storm icon" />
        </div>
        <div className="today-txt">{props.description}</div>
        <div className="mt-25">
          <span className="bold">Temperature</span>
          {props.tempMin}C to {props.tempMax}C
        </div>
        <div className="mt-25">
          <span className="bold">Humidity</span> {props.humidity}%
          <span className="bold2">Pressure</span> {props.pressure}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
