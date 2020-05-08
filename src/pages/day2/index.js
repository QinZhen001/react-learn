import React, { Component } from "react";

import AntdForm from "./components/AntdForm"
import KFormTest from "./components/KFormTest"

export default class Day2 extends Component {
  render(){
    return (
      <div>
        <div>第二天</div>
        <div className="item">
          <p>组件设计与实现</p>
          <AntdForm></AntdForm>
        </div>
        <div className="item">
          <p></p>
          <KFormTest></KFormTest>
        </div>
      </div>
    )
  }
}

