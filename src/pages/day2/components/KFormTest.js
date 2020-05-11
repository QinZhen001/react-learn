// TODO: (重要知识) 自己封装form组件

import React from "react";
import { Divider } from "antd";

//高阶组件：扩展现有表单，提供控件包装、事件处理、表单校验
function kFormCreate(Comp) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // 选项
      this.options = {};
      // 数据
      this.state = {};
    }

    // 处理输入事件
    handleChange = (e) => {
      // 数据设置和校验
      const { name, value } = e.target;
      this.setState(
        {
          [name]: value,
        },
        () => {
          // 单字段检验
          this.validateField(name);
        }
      );
    };

    validateField = (field) => {
      const rules = this.options[field].rules;
      // some里面任何一项不通过就返回true跳出，取反表示校验失败
      const isValid = !rules.some((rule) => {
        if (rule.required) {
          if (!this.state[field]) {
            // 校验失败
            this.setState({
              [field + "Message"]: rule.message,
            });
            return true;
          }
        }

        // ... 其他校验
        return false;
      });

      if (isValid) {
        // 通过校验
        this.setState({
          [field + "Message"]: "",
        });
      }

      return isValid;
    };

    // 校验所有字段
    validateFields = (cb) => {
      const rets = Object.keys(this.options).map((field) =>
        this.validateField(field)
      );
      const ret = rets.every((v) => v === true);
      cb(ret, this.state);
    };

    // 包装函数：接收字段名和校验选项返回一个高阶组件
    getFieldDec =  (field, option) => {
      // 选项告诉我们如何校验  所有option最终都会存到this.options
      this.options[field] = option;
      return InputComp => (
        <div>
        {React.cloneElement(InputComp, {
          name: field,
          value: this.state[field] || "",
          onChange: this.handleChange //执行校验设置状态等
        })}
        {this.state[field + "Message"]?
        <p style={{color:"red"}}>{this.state[field + "Message"]}</p>:""
       }
      </div>
      )
    }

    render() {
      return (
        <Comp
          getFieldDec={this.getFieldDec}
          validateFields={this.validateFields}
        ></Comp>
      );
    }
  };
}


// ----------------------------------


@kFormCreate
class KFormTest extends React.Component {
  onSubmit = () => {
    this.props.validateFields((isValid,values)=>{
      if(isValid){
        alert("登录啦！");
      }else{
        alert("校验失败！");
      }
    })
  }

  render(){
    const { getFieldDec } = this.props;
    return (
      <div>
        <div>
        {
          getFieldDec("username",{
            rules:[{
              required: true,
              message:"Please input your username"
            }]
          })(<input type="text"/>)
        }
        </div>
        <div>
          {
            getFieldDec("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(<input type="password" />)
          }
        </div>
        <button onClick={this.onSubmit}>登录</button>
      </div>
    )
  }
}


export default KFormTest


























