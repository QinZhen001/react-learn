import React, { useState, useEffect, useReducer, useContext } from "react";
import { render } from "@testing-library/react";

const Context = React.createContext();

// 水果列表
function FruitList({ fruits, setFruit }) {
  return fruits.map((f) => (
    <li key={f} onClick={() => setFruit(f)}>
      {f}
    </li>
  ));
}

// 水果添加
function FruitAdd(props) {
  const [pname, setPname] = useState("");
  const { dispatch } = useContext(Context);

  const onAddFruit = (e) => {
    console.log("onAddFruit", this);
    if (e.key === "Enter") {
      dispatch({ type: "add", payload: pname });
      setPname("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={pname}
        onChange={(e) => setPname(e.target.value)}
        onKeyDown={onAddFruit}
      ></input>
    </div>
  );
}

// 将状态转移至全局
function fruitReducer(state, action) {
  switch (action.type) {
    case "init":
      return action.payload;
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default function HookText() {
  const [fruit, setFruit] = useState("草莓");
  // 参数一是相关reducer 参数二是初始值
  const [fruits, dispatch] = useReducer(fruitReducer, []);

  // 副作用
  // 第二个参数选择依赖项 设置空数组表示仅执行一次
  useEffect(() => {
    console.log("get fruits");

    setTimeout(() => {
      dispatch({
        type: "init",
        payload: ["草莓", "香蕉", "苹果", "梨子"],
      });
    }, 1000);
  }, []);

  useEffect(() => {
    document.title = fruit;
  }, [fruit]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("应用启动了");
    }, 1000);

    // 返回清除函数 (组件销毁时调用)
    return function () {
      clearInterval(timer);
    };
  }, []);

  return (
    <Context.Provider value={{ fruit, dispatch }}>
      <div>
        <p>
          {fruit === "" ? (
            "请选择喜爱的水果"
          ) : (
            <span>
              您选择的是 <span style={{ color: "red" }}>{fruit}</span>
            </span>
          )}
        </p>
        <FruitAdd></FruitAdd>
        <FruitList fruits={fruits} setFruit={setFruit}></FruitList>
      </div>
    </Context.Provider>
  );
}
