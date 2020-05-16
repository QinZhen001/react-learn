# 手写react源码



## redux

[https://www.redux.org.cn/docs/recipes/reducers/PrerequisiteConcepts.html](https://www.redux.org.cn/docs/recipes/reducers/PrerequisiteConcepts.html)

一个 Redux reducer 函数需要具备：(previousState, action) => newState 特征的函数

**一个很重要的点：action.type的命名不能重复，否则dispatch可能会触发多个reducer，导致修改了多个子state**



### redux中间件机制



[ https://www.jianshu.com/p/ae7b5a2f78ae ]( https://www.jianshu.com/p/ae7b5a2f78ae )



 增加了 middleware 后，我们就可以在这途中对 action 进行截获，并进行改变 。



```js
const middlewareChain = middlewares.map((middleware) => middleware(midApi));

// 融合成最终的dispatch
dispatch = compose(...middlewareChain)(store.dispatch);

```



换一种说法，中间件增强了原来dispatch的能力，或者，中间件在原来dispatch之前做了一些额外的操作





### action

Actions look like this:



```js
// 1. plain object
// 2. has a type
// 3. whatever else you want
{
  type: "USER_LOGGED_IN",
  username: "dave"
}
```







###  action creators 

And, since it’s kind of annoying to write those objects by hand all the time (not to mention error-prone), Redux has the concept of “action creators” to stamp these things out:

```jsx
function userLoggedIn() {
  return {
    type: 'USER_LOGGED_IN',
    username: 'dave'
  };
}
```





### thunk

[ https://daveceddia.com/what-is-a-thunk/ ]( https://daveceddia.com/what-is-a-thunk/ )



[Thunk 函数的含义和用法]( http://www.ruanyifeng.com/blog/2015/05/thunk.html )



 A thunk is another word for a *function*. But it’s not just any old function. It’s a special (and uncommon) name for a function that’s returned by another. Like this: 



thunk是函数的另一种说法。但它不是一个普通的函数。对于由另一个函数返回的函数，它是一个特殊(且不常见)的名称。


 

```js
function wrapper_function() {
  // this one is a "thunk" because it defers work for later:
  return function thunk() {   // it can be named, or anonymous
    console.log('do stuff now');
  };
}
```



-----



编译器的"传名调用"实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。



```js
function f(m){
  return m * 2;     
}

f(x + 5);

// 等同于

var thunk = function () {
  return x + 5;
};

function f(thunk){
  return thunk() * 2;
}
```





上面代码中，函数 f 的参数 x + 5 被一个函数替换了。凡是用到原参数的地方，对 Thunk 函数求值即可。



**这就是 Thunk 函数的定义，它是"传名调用"的一种实现策略，用来替换某个表达式。**










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









