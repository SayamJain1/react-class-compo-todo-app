import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          {this.props.userName} TODO
        </h2>
      </div>
    );
  }
}

export default Header;
