import React from 'react'

export default class ComB extends React.Component{
  constructor(props){
      super(props)
  }
  componentWillReceiveProps(nextProps){
      console.log('组件B componentWillReceiveProps执行',nextProps)
      /* 可能做一些骚操作 wu lian */
  }
  render(){
      console.log('组件B渲染')
      return <div>
          我是组件B
      </div>
  }
}

