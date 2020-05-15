# 手写react源码



## redux

[https://www.redux.org.cn/docs/recipes/reducers/PrerequisiteConcepts.html](https://www.redux.org.cn/docs/recipes/reducers/PrerequisiteConcepts.html)

一个 Redux reducer 函数需要具备：(previousState, action) => newState 特征的函数

**一个很重要的点：action.type的命名不能重复，否则dispatch可能会触发多个reducer，导致修改了多个子state**














