import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>{this.props.rows}</tbody>
      </table>
    );
  }
}

export default Table;
