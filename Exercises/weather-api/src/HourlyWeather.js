import React from "react";
import "./App.css";

import Hours from "./Hours";
export default function HourlyWeather(props) {
  return (
    <div className="container extend">
      <div className="hourly-title">HOURLY</div>
      <div className="row">
        <Hours temp={props.temp}></Hours>
        <Hours temp={props.temp}></Hours>
        <Hours temp={props.temp}></Hours>
        <Hours temp={props.temp}></Hours>
        <Hours temp={props.temp}></Hours>
        <Hours temp={props.temp}></Hours>
        <Hours temp={props.temp}></Hours>
      </div>
    </div>
  );
}
