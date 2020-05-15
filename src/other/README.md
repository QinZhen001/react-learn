# 手写react源码



## redux

[https://www.redux.org.cn/docs/recipes/reducers/PrerequisiteConcepts.html](https://www.redux.org.cn/docs/recipes/reducers/PrerequisiteConcepts.html)

一个 Redux reducer 函数需要具备：(previousState, action) => newState 特征的函数

**一个很重要的点：action.type的命名不能重复，否则dispatch可能会触发多个reducer，导致修改了多个子state**




## 问题





### dispatch为什么采用箭头函数赋值



答案其实是 **和上下文有关**



```js
    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args),
    };
```



这种写法，dispatch执行时，this不会指向midApi对象，而是会指向midApi所在的环境（也就是midApi的父级）



---



举个例子：



使用箭头函数：

```js

function dispatch(...args) {
  // 这里的this指向window
  console.log("dispatch", this); 
  console.log("args", args);
}

const midApi = {
  getState: "...",
  dispatch: (...args) => dispatch(...args),
};


midApi.dispatch(1,2,3,4,5)
```



不使用箭头函数：

```js
function dispatch(...args) {
  // 这里的this指向midApi对象
  console.log("dispatch", this); 
  console.log("args", args);
}

const midApi = {
  getState: "...",
  dispatch: dispatch,
};


midApi.dispatch(1,2,3,4,5)
```









