const initialState = { isLogin: false, loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case "requestLogin":
      return { isLogin: false, loading: true };
    case "loginSuccess":
      return { isLogin: true, loading: false };
    case "loginFailure":
      return { isLogin: false, loading: false };
    default:
      return state;
  }
};



export function login(user){
  return (dispatch,getState) => {
    dispatch({ type: "requestLogin" });
    setTimeout(() => {
      if(Math.random() > 0.3 ){
        dispatch({ type: "loginSuccess" });
        alert("登录成功")
      }else{
        dispatch({ type: "loginFailure" });
        alert("登录失败")
      }
    }, 3000);
  }
}
