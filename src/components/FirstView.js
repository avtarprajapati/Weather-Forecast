import React, { Component } from "react";
import weatherImg from "../assets/weatherImg.png";

export class FirstView extends Component {
  render() {
    return (
      <div className="show first-view">
        <img src={weatherImg} alt="weather" />
        <h2>To Search your favorite city know 5 days forecast.</h2>
      </div>
    );
  }
}

export default FirstView;
