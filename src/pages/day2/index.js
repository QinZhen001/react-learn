import React, { Component } from "react";

import AntdForm from "./components/AntdForm"
import KFormTest from "./components/KFormTest"
import HookTest from "./components/HookTest"

export default class Day2 extends Component {
  render(){
    return (
      <div>
        <div>第二天</div>
        <div className="item">
          <p>测试 hook</p>
          <HookTest></HookTest>
        </div>
        <div className="item">
          <p>Antd组件库中的form</p>
          <AntdForm></AntdForm>
        </div>
        <div className="item">
          <p>自定义form组件</p>
          <KFormTest></KFormTest>
        </div>
      </div>
    )
  }
}

