import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import fruitReducer from './fruit.redux'
import userReducer from './user.redux'

// 参数二是中间件函数
const store = createStore(
  combineReducers({
    fruit: fruitReducer,
    user: userReducer
  }),
  applyMiddleware(logger, thunk)
)

export default store
