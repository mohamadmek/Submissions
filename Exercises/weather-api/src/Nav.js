import React from "react";
import "./App.css";
export default function Nav() {
  return (
    <nav>
      <label for="city" className="label-city">
        <input type="text" name="city" className="city"></input>
      </label>
      <button className="btn-search">FIND WEATHER</button>
    </nav>
  );
}
