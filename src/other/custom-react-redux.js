import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "./custom-redux"


export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps = {}
) => (WrapComponent) => {
  return class ConnectComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    };

    constructor(props, context) {
      super(props, context);
      this.state = {
        props: {},
      };
    }

    componentDidMount() {
      const { store } = this.context;
      store.subscribe(() => this.update());
      this.update();
    }

    // 更新
    update() {
      const { store } = this.context;
      const stateProps = mapStateToProps(store.getState());
      const dispatchToProps  = bindActionCreators(mapDispatchToProps,store.dispatch)
      this.setState({
        props:{
          ...this.state.props,
          ...stateProps,
          ...dispatchToProps
        }
      })
    }

    render(){
      return <WrapComponent {...this.state.props}></WrapComponent>
    }
  };
};




export class Provider extends React.Component {
  static childContextTypes = {
    store:PropTypes.object
  }

  getChildContext(){
    return {
      store:this.store
    }
  }

  constructor(props,context){
    super(props,context)
    this.store = props.store
  }

  render(){
    return this.props.children
  }
}



