export function createStore(reducer,enhancer){
   // 增强器
   if(enhancer){
     return enhancer(createStore)(reducer)
   }
   let currentState  = {}
   let currentListeners  = []

   function getState(){
      return currentState 
   }

   function subscribe(listener){
    currentListeners.push(listener)
   }

   function dispatch(action){
    // reducer 根据当前state 和 action 得到新的state
    currentState = reducer(currentState,action)
    // dispatch 后会执行所有listener
    currentListeners.forEach(v=>v())
   }
}