import React, { Component } from "react";

export class View extends Component {
  render() {
    const { selectDay, cityDetails } = this.props;
    if (!selectDay) return null;
    if (!cityDetails) return null;
    const imgUrl = `http://openweathermap.org/img/wn/${selectDay.icon}@2x.png`;

    return (
      <div className="view">
        <div className="data">
          <div className="temp">
            <p>
              {selectDay.temp}
              <span>C</span>
            </p>
            <label>{selectDay.description}</label>
          </div>
          <div className="info">
            <div className="humidity">
              <label>Humidity</label>
              <p>{selectDay.humidity}%</p>
            </div>
            <div className="wind">
              <label>Wind</label>
              <p>{selectDay.wind} kph</p>
            </div>
          </div>
        </div>
        <div className="city">
          <h2 className="cityname">{cityDetails.name}</h2>
          <img src={imgUrl} alt={selectDay.description} className="img" />
        </div>
      </div>
    );
  }
}

export default View;
