import React, { Component } from "react";

import JsxTest from "./JsxTest";
import CompType from "./CompType";
import SatateTest from "./StateTest"
import CartSample from "./CartSample"

import "./index.css";

export default class Day1 extends Component {
  render() {
    return (
      <div>
        <div className="item">
          <JsxTest></JsxTest>
        </div>
        <div className="item">
          <CompType></CompType>
        </div>
        <div className="item">
           <SatateTest></SatateTest>
        </div>
        <div className="item">
            <CartSample></CartSample>
        </div>
      </div>
    );
  }
}
