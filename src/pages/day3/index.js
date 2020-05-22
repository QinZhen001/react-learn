import React, { Component } from "react";

import KFormTest from "./components/KFormTest";
import HookTest from "./components/HookTest";

import store from "../../store/index";
import { Provider } from "react-redux";

export default class Day3 extends Component {
  render() {
    return (
      <div>
        <div className="header">第三天</div>
        <div className="item">
          <p>自定义form组件</p>
          <KFormTest></KFormTest>
        </div>
        <div className="item">
          <p>hook 结合 redux</p>
          <Provider store={store}>
            <HookTest></HookTest>
          </Provider>
        </div>
      </div>
    );
  }
}
