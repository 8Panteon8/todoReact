import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  button = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttonFilter = this.button.map(({ name, label }) => {
      const isFilter = filter === name;
      const clazz = isFilter ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttonFilter}</div>;
  }
}
