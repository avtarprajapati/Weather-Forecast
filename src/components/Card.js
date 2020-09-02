import React, { Component } from "react";

export class Card extends Component {
  render() {
    console.log(this.props.data);
    const { data, selectDay } = this.props;
    if (!data) return null;
    const imgUrl = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
    return (
      <div className="card" onClick={() => selectDay(data)}>
        <img src={imgUrl} alt={data.description} className="card__icon" />
        <div className="card__temp">
          {data.temp}
          <span>C</span>
        </div>
        <div className="card__desc">{data.description}</div>
      </div>
    );
  }
}

export default Card;
