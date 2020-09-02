import React, { Component } from "react";

export class Card extends Component {
  onClickShow = (data) => {
    this.props.selectDay(data);
  };

  render() {
    const { data, selectDay } = this.props;
    if (!data) return null;
    const imgUrl = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

    return (
      <div className="card" onClick={() => this.onClickShow(data)}>
        <img src={imgUrl} alt={data.description} className="card__icon" />
        <div className="card__temp">
          {data.temp}
          <span>C</span>
          <div className="card__desc">{data.description}</div>
        </div>
      </div>
    );
  }
}

export default Card;
