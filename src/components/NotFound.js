import React, { Component } from "react";
import weatherImg from "../assets/weatherImg.png";

export class NotFound extends Component {
  render() {
    return (
      <div className="show first-view">
        <img src={weatherImg} alt="weather" />
        <h2>Please Enter your favorite city correctly.</h2>
      </div>
    );
  }
}

export default NotFound;
