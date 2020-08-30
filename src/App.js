import React, { Component } from "react";
import Search from "./components/Search";
import "./style/base.scss";
import "./style/variable.scss";
import "./style/include.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
