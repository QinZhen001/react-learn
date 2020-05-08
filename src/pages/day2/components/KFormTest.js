import React from "react";


//高阶组件：扩展现有表单，提供控件包装、事件处理、表单校验
function kFormCreate(Comp) {
    return class extends React.Component{
      constructor(props){
        super(props)
        // 选项
        this.options = {};
        // 数据
        this.state = {};
      }

      
    }
}























