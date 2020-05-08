import React, { Component } from "react";

// 创建上下文
const Context = React.createContext();

const store = {
  token: "jilei",
};

export default class ContextTest extends Component {
  render() {
    return (
      <Context.Provider value={store}>
        <div>
          <Context.Consumer>
            {store => <p>
                 拿到context里面的数据 {store.token}
              </p>}
          </Context.Consumer>
        </div>
      </Context.Provider>
    );
  }
}


