import React, { Component } from "react";

function Dialog(props) {
  const color = props.color || "blue";
  return (
    <div style={{ border: `4px solid ${color}` }}>
      {/* children是固定名称，类似于匿名插槽 */}
      {props.children("children 11")}
      <div>{props.foo("这个内容是dialog传递的")}</div>
      <div>
        {/* 具名插槽 */}
        {props.footer}
      </div>
    </div>
  );
}

// WelcomeDialog通过复合提供内容
function WelcomeDialog() {
  const footer = <button onClick={() => alert("react")}>button bbb</button>;

  return (
    //   传递任意合法表达式
    <Dialog color="black" footer={footer} foo={(c) => <p>{c}</p>}>
      {(ccc) => (
        <div>
          <h1>我是一个dialog</h1>
          <p>我是外面传参进来的 {ccc}</p>
        </div>
      )}
    </Dialog>
  );
}


export default WelcomeDialog

