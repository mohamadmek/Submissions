import React from "react";
import "./App.css";

export default function Hours(props) {
  return (
    <div className="hours-weather b-r b-l b-rl">
      <div className="hour">{props.time}</div>
      <div className="icon">
        <img src={props.icon(props.nbId)} alt="stormy"></img>
      </div>
      <div>{props.temp}&#8451;</div>
    </div>
  );
}
