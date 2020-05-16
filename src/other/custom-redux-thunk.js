// it is a middleware that looks at every action that passes through the system, and if it’s a function, 
// it calls that function. That’s all it does.



const thunk = ({dispatch,getState}) => next => action => {
  if(typeof action == "function"){
    return action(dispatch,getState)
  }
  return next(action)
}

export default thunk























