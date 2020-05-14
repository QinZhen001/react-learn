import React, { Component } from "react";

export default class Day3 extends Component {
  test = (e) => {
    console.log("day3", this);
  };

  render() {
    return (
      <div>
        <div className="header" onClick={this.test}>
          第三天
        </div>
      </div>
    );
  }
}
