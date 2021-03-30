import React, { useState, useEffect, useReducer, useContext } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route, Redirect, Switch } from "react-router-dom";
import { login } from "../../day8/store/user.redux";
import { asyncFetch } from "../../day8/store/fruit.redux";
import { removeFileItem } from "antd/lib/upload/utils";

function FruitList({ fruits, setFruit }) {
  return (
    <div>
      <ul>
        {fruits.map((f) => (
          <li key={f} onClick={() => setFruit(f)}>
            <Link to={`/list/detail/${f}`}>{f}</Link>
          </li>
        ))}
      </ul>
      <Route path="/list/detail/:fruit" component={Detail}></Route>
    </div>
  );
}

// 水果详情
function Detail({ match, history, location }) {
  console.log("match", match);
  console.log("history", history);
  console.log("location", location);

  return (
    <div>
      <h3>{match.params.fruit}的详情</h3>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <div>
        <button onClick={history.goBack}>返回</button>
      </div>
    </div>
  );
}

// 添加水果
const FruitAdd = connect()(function ({ dispatch }) {
  const [pname, setPname] = useState("");

  const onAddFruit = (e) => {
    // console.log("dispatch",dispatch)
    // dispatch({type:"test",payload:{aaa:"aaa",bbb:"bbb"}})
    // debugger
    // console.log(e);
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
});

// 登录组件
const Login = connect(
  (state) => ({
    isLogin: state.user.isLogin,
  }),
  { login }
)(function ({ location, isLogin, login }) {
  // 重定向地址
  const redirect = location.state.redirect || "/";

  if (isLogin) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <p>用户登录</p>
      <hr />
      <button onClick={login}>登录</button>
    </div>
  );
});

// 创建高阶组件包装Route组件 使其可以验证用户登录态
const PrivateRoute = connect((state) => ({
  isLogin: state.user.isLogin,
}))(function ({ component: Component, isLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        // 执行登录判断逻辑从而动态生成组件
        (props) =>
          isLogin ? (
            <Component {...props}></Component>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                // 重定向地址
                state: { redirect: props.location.pathname },
              }}
            ></Redirect>
          )
      }
    ></Route>
  );
});

function HookTest({ fruits, loading, asyncFetch }) {
  const [fruit, setFruit] = useState("草莓");

  useEffect(() => {
    console.log("get fruits");
    asyncFetch(["草莓", "香蕉", "梨子", "西瓜"]);
  }, [asyncFetch]);

  useEffect(() => {
    document.title = fruit;
  }, [fruit]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("应用启动了");
    }, 2000);

    return function () {
      clearInterval(timer);
    };
  }, []);


  return (
    <BrowserRouter>
      <nav>
        <Link to="/list">水果列表</Link> 
        <span> | </span>
        <Link to="/add">添加水果</Link>
      </nav>

      <div>
        <Switch>
          <Route
            path="/list"
            render={() =>
              loading ? (
                <div>数据加载中...</div>
              ) : (
                <FruitList fruits={fruits} setFruit={setFruit} />
              )
            }
          ></Route>
          <PrivateRoute path="/add" component={FruitAdd} />
          <Route path="/login" component={Login}></Route>
          <Route component={() => <h3>页面不存在</h3>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  fruits: state.fruit.list,
  loading: state.fruit.loading,
});

const mapDispatchToProps = {
  asyncFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(HookTest);
