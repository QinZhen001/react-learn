export function createStore(reducer, enhancer) {
  // 增强器 (用于强化createStore)
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState = {};
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    currentListeners.push(listener);
  }

  function dispatch(action) {
    // reducer 根据当前state 和 action 得到新的state
    currentState = reducer(currentState, action);
    // dispatch 后会执行所有listener
    currentListeners.forEach((v) => v());
    return action;
  }

  // 初始化
  dispatch({ type: "@IMOOC/KKB-REDUX" });

  return {
    getState,
    subscribe,
    dispatch,
  };
}

// 合并中间件
export function applyMiddleware(...middlewares) {
  // 返回一个高阶函数 (第一个参数接受上面的createStore函数)
  return (createStore) => (...args) => {
    console.log("args", args);
    debugger;
    // 这里的args 就相当于 reducer
    const store = createStore(...args);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      // QUESTION: 这个dispatch为什么要用箭头函数这样赋值
      // 答案：参考 README
      dispatch: (...args) => dispatch(...args),
    };

    const middlewareChain = middlewares.map((middleware) => middleware(midApi));

    // 融合成最终的dispatch
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((left, right) => (...args) => right(left(...args)));
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args));
}

export function bindActionCreators(creators, dispatch) {
  return Object.keys(creators).reduce((ret, item) => {
    ret[item] = bindActionCreator(creators[item],dispatch)
    return ret
  }, []);
}
