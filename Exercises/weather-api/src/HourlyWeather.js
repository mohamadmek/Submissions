import React from "react";
import "./App.css";

import Hours from "./Hours";
export default function HourlyWeather() {
  return (
    <div className="container extend">
      <div className="hourly-title">HOURLY</div>
      <div className="row">
        <Hours></Hours>
        <Hours></Hours>
        <Hours></Hours>
        <Hours></Hours>
        <Hours></Hours>
        <Hours></Hours>
        <Hours></Hours>
      </div>
    </div>
  );
}
