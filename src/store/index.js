import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import fruitReducer from "./fruit.redux";
import userReducer from "./user.redux";

let a = 1;

//   参数二是中间件函数
export default function () {
  a++;
  console.log("aaa", a);
}
