import React from "react";
import { Icon } from "antd";

// 高阶组件：扩展现有表单，提供控件包装、事件处理、表单校验
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
          // 单字段校验
          this.validateField(name);
        }
      );
    };

    // 包装函数：接收字段名和校验选项返回一个高阶组件
    getFieldDec = (field, option) => {
      // 存储校验规则
      this.options[field] = option;
      return (InputComp => (
        <div>
          {React.cloneElement(InputComp, {
            name: field,
            value: this.state[field] || "",
            // 执行校验设置状态等
            onChange: this.handleChange,
            // 焦点处理
            onFocus: this.handleFocus,
          })}
        </div>
      ));
    };

    // 校验全部字段
    validateFields = (cb) => {
      const rets = Object.keys(this.options).map((field) => {
        return this.validateField(field);
      });
      const ret = rets.every((v) => v === true);
      cb(ret, this.state);
    };

    // 校验字段
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
        return false;
      });

      if (isValid) {
        this.setState({
          [field + "Message"]: "",
        });
      }
      return isValid;
    };

    // 焦点处理
    handleFocus = (e) => {
      const field = e.target.name;
      this.setState({
        [field + "Focus"]: true,
      });
    };

    isFieldTouched = (field) => {
      return !!this.state[field + "Focus"];
    };

    getFieldError = (field) => {
      return this.state[field + "Message"];
    };

    render() {
      return (
        <Comp
          getFieldDec={this.getFieldDec}
          validateFields={this.validateFields}
          isFieldTouched={this.isFieldTouched}
          getFieldError={this.getFieldError}
        ></Comp>
      );
    }
  };
}

class FormItem extends React.Component {
  render() {
    return (
      <div>
        {/* 默认插槽 */}
        {this.props.children}
        {this.props.help && (
          <p
            style={{
              color: this.props.validateStatus === "error" ? "red" : "green",
            }}
          >
            {this.props.help}
          </p>
        )}
      </div>
    );
  }
}

class KInput extends React.Component {
  render() {
    const { prefix, ...rest } = this.props;
    return (
      <div>
        {prefix}
        <input {...rest}></input>
      </div>
    );
  }
}

@kFormCreate
class KFormTest extends React.Component {
  onSubmit = () => {
    this.props.validateFields((isValid,values)=>{
      if(isValid){
        console.log(values)
        alert("登录成功！");
      }else{
        alert("校验失败！");
      }
    })
  }


  render() {
    const { getFieldDec, isFieldTouched, getFieldError } = this.props;
    const unameError = isFieldTouched("username") && getFieldError("username");
    const passwordError = isFieldTouched("password") && getFieldError("password");
    return (
    <div>
      <FormItem validateStatus="error" help={unameError || ""}>
        {
          getFieldDec("username",{
            rules:[{required: true, message: "Please input your username!"}]
          })(<KInput type="text" prefix={<Icon type="user"></Icon>}></KInput>)
        }
      </FormItem>
      <FormItem validateStatus="error" help={passwordError || ""}>
        {
          getFieldDec("password",{
            rules: [{ required: true, message: "Please input your Password!" }]
          })(<KInput type="text" prefix={<Icon type="lock" />} />)
        }
      </FormItem>
      <button onClick={this.onSubmit}>登录</button>
    </div>)
  }
}

export default KFormTest;
