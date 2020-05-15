import React from "react";
import PropTypes from 'prop-types'


export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps = {}
) => (WrapComponent) => {
  return class ConnectComponent extends React.Component {
    static contextTypes = {
      store:PropTypes.object
    };

    constructor(props,context){
      super(props,)
    }

  };
};
