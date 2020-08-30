import React, { Component } from "react";
import Search from "./components/Search";

import "./style/include.scss";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
      </div>
    );
  }
}

export default App;
