import React from "react";

export class Search extends React.Component {
  state = {
    cityName: ""
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.cityName(this.state.cityName);
    this.setState({ cityName: "" });
  };
  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)} className="form">
        <input
          type="text"
          placeholder="Search your favorite city"
          name="search"
          value={this.state.cityName}
          onChange={(e) => this.setState({ cityName: e.target.value })}
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}

export default Search;
