import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="col-">
        <label htmlFor="todo">Add todo</label>
        <input
          id="todo"
          className="from-control"
          value={this.props.value}
          onChange={this.props.changeHandler}
        ></input>
      </div>
    );
  }
}

export default Input;
