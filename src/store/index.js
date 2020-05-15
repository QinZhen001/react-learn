import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import fruitReducer from './fruit.redux'
import userReducer from './user.redux'

/**
 * 参数一：reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
 * 参数二：(Function): Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。
 * 这与 middleware 相似，它也允许你通过复合函数改变 store 接口。
 */
const store = createStore(
  combineReducers({
    fruit: fruitReducer,
    user: userReducer
  }),
  applyMiddleware(logger, thunk)
)

export default store
