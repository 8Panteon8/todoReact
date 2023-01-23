import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex mt-2" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="what needs to be done"
          value={this.state.label}
        />
        <button
          // type="sybmit"
          className="btn btn-info btn-outline-secondary ml-2"
        >
          Add new task
        </button>
      </form>
    );
  }
}
