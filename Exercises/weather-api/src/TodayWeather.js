import React from "react";
import "./App.css";
import cloudy from "../src/img/weather-icons/partlycloudy.svg";
export default function TodayWeather() {
  return (
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
    </div>
  );
}
