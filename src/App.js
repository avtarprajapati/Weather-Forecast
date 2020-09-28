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
      const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${KEY}`;

      const {
        data: { city, list }
      } = await axios.get(weatherApi);

      let currentTimeHours = new Date().getHours();

      const dailyData = list.filter((data) => {
        if (data.dt_txt.includes(currentTimeHours + ":00:00")) {
          return data.dt_txt.includes(currentTimeHours + ":00:00");
        } else if (data.dt_txt.includes(currentTimeHours + 1 + ":00:00")) {
          return data.dt_txt.includes(currentTimeHours + 1 + ":00:00");
        } else {
          return data.dt_txt.includes(currentTimeHours - 1 + ":00:00");
        }
      });

      let shortData = dailyData.map((data) => {
        return {
          day: new Date(data.dt * 1000).toDateString().split(" ")[0],
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
      console.log(error);
      this.setState({ notFound: true });
    }
  };

  onSelectDay = (day) => {
    this.setState({ selectDay: day });
  };

  render() {
    const {
      forecastData: { shortData, city },
      selectDay,
      notFound
    } = this.state;
    return (
      <div className="container">
        <Search cityName={this.onSearch} />
        {notFound && <NotFound />}
        {shortData.length === 0 && !notFound && <FirstView />}
        {!notFound && shortData.length > 0 ? (
          <div className="show">
            <View selectDay={selectDay} cityDetails={city} />
            <div className="cardShow">
              {shortData &&
                shortData.map((day, i) => (
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
