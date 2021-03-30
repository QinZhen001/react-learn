import { func } from "prop-types";
import React, { Component, useState, createRef, Children } from "react";

// test mobx autorun
// import "./mobx/auto"

// test mobx computed
// import './mobx/computed'

// test mobx runInAction
// import './mobx/runInAction'

// test mobx map
// import './mobx/map'

// test mobx action
// import './mobx/action'

// test mobx when
// import './mobx/when'

// test mobx reaction
// import './mobx/reaction'

// test mobx spy
// import './mobx/spy'

// import {leo} from './store1/index'

import { observer } from "mobx-react";
import { useStores } from "./store1/serch";

// class 组件
@observer
class Day8WithClass extends React.Component {
  handleInputChanged = (event) => {
    const { searchStore } = this.props;
    searchStore.setSearchText(event.target.value);
  };

  render() {
    const { serchStore } = this.props;
    return (
      <input
        value={serchStore.serchText}
        onChange={this.handleInputChanged}
      ></input>
    );
  }
}

const Day8WithFn = observer(() => {
  const { searchText, setSearchText } = useStores();

  const handleInputChanged = (event) => {
    console.log("handleInputChanged",event.target.value);
    setSearchText(event.target.value);
  };

  return <input value={searchText} onChange={handleInputChanged}></input>;
});

export default Day8WithFn;

// export default function Day8(props){
//     return <div>1231321</div>
// }
