import React, { Component } from "react";
// import debounce from "lodash.debounce";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        type="text"
        className="search-input"
        value={this.state.term}
        placeholder="type to search"
        onChange={this.onSearchChange}
      />
    );
  }
}
