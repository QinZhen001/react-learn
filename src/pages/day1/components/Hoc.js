import React, { Component } from "react";

// 创建一个函数接收一个组件返回另一个组件
function withState(Component){
  const NewComponent = props => {
    return <Component {...props} stage="react"></Component>
  }

  return NewComponent
}


// 功能：日志记录
function withLog(Component){
 return props => {
  console.log("日志记录 " + new Date())
   return <Component  {...props}></Component>
 }
}

@withLog
@withState
@withLog
class Hoccc extends Component {
  render(){
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    )
  }
}


export default Hoccc



