import React from "react";
import "./App.css";
import storm from "../src/img/weather-icons/storm.svg";
export default function Hours(props) {
  return (
    <div className="hours-weather b-r b-l b-rl">
      <div className="hour">03:00</div>
      <div className="icon">
        <img src={storm} alt="stormy"></img>
      </div>
      <div>{props.temp}F</div>
    </div>
  );
}