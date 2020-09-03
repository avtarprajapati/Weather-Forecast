import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import View from "./components/View";
import Card from "./components/Card";
import FirstView from "./components/FirstView";
import NotFound from "./components/NotFound";

import "./style/include.scss";

export class App extends Component {
  state = {
    forecastData: { city: {}, shortData: [] },
    selectDay: {},
    notFound: false
  };

  onSearch = async (cityName) => {
    try {
      this.setState({ cityName });
      const KEY = "d6185cd347740b9d71798eccd5aa1802";
      const PROXY = "https://cors-anywhere.herokuapp.com/";
      const weatherApi = `${PROXY}https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${KEY}`;

      const {
        data: { city, list }
      } = await axios.get(weatherApi);

      let currentTimeHours = new Date().getHours();

      const dailyData = list.filter((data) =>
        data.dt_txt.includes(currentTimeHours)
          ? data.dt_txt.includes(currentTimeHours)
          : data.dt_txt.includes(currentTimeHours + 1)
          ? data.dt_txt.includes(currentTimeHours + 1)
          : data.dt_txt.includes(currentTimeHours - 1)
      );

      let shortData = dailyData.map((data) => {
        return {
          dateTime: data.dt,
          temp: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        };
      });

      // console.log("Proper data through filter", city, shortData);

      this.setState({
        forecastData: { city, shortData },
        selectDay: shortData[0],
        notFound: false
      });
    } catch (error) {
      this.setState({ notFound: true });
    }
  };

  onSelectDay = (day) => {
    this.setState({ selectDay: day });
  };

  render() {
    return (
      <div className="container">
        <Search cityName={this.onSearch} />
        {this.state.notFound && <NotFound />}
        {this.state.forecastData.shortData.length === 0 && <FirstView />}
        {!this.state.notFound &&
        this.state.forecastData.shortData.length > 0 ? (
          <div className="show">
            <View
              selectDay={this.state.selectDay}
              cityDetails={this.state.forecastData.city}
            />
            <div className="cardShow">
              {this.state.forecastData.shortData &&
                this.state.forecastData.shortData.map((day, i) => (
                  <Card data={day} key={i} selectDay={this.onSelectDay} />
                ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
