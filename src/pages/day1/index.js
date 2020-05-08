import React, { Component } from "react";

import JsxTest from "./components/JsxTest";
import CompType from "./components/CompType";
import SatateTest from "./components/StateTest";
import CartSample from "./components/CartSample";
import CommentList from "./components/CommentList";
import Hoc from "./components/Hoc"
import Composition from "./components/Composition"
import ContextTest from "./components/ContextTest"


export default class Day1 extends Component {
  render() {
    return (
      <div>
        <div>第一天</div>
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
        <div className="item">
          <CommentList></CommentList>
        </div>
        <div className="item">
          <p>高阶组件</p> 
          <Hoc name="Hoc"></Hoc>
        </div>
        <div className="item">
          <p>组件复合</p>
          <Composition></Composition>
        </div>
        <div className="item">
          <p>Context 使用</p>
          <ContextTest></ContextTest>
        </div>
      </div>
    );
  }
}
