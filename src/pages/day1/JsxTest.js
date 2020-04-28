import React, { Component } from "react";

function formatName(user) {
  return user.firstName + "-" + user.lastName;
}

export default class JsxTest extends Component {
  render() {
    const name = "Jerry";
    const greet = <p>hello, jerry</p>;

    return (
      <div>
        <h1>{ name }</h1>
        <p>{formatName({
          firstName:"aaa",
          lastName:"bbb"
        })}</p>
        {greet}
      </div>
    );
  }
}
