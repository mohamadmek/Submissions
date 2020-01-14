import React from "react";
import "./App.css";
import { render } from "react-dom";
export default class Nav extends React.Component {
  state = {
    input: "london"
  };
  onInput = e => this.setState({ input: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <nav>
        <label className="label-city">
          <input
            type="text"
            name="city"
            value={this.state.value}
            className="city"
            onChange={this.onInput}
          ></input>
        </label>
        <button className="btn-search" type="submit" onClick={this.onSubmit}>
          FIND WEATHER
        </button>
      </nav>
    );
  }
}
