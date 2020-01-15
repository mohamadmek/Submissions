import React from "react";
import "./App.css";
import Hours from "./Hours";
export default function HourlyWeather(props) {
  return (
    <div className="container extend">
      <div className="hourly-title">HOURLY</div>
      <div className="row">
        {props.list.map(list => (
          <Hours time={list.dt_txt.split(" ")[1]} temp={list.main.temp} />
        ))}
      </div>
    </div>
  );
}
