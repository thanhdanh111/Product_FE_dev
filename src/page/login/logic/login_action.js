import { LOGIN_ACTION_TYPE } from "./login_action_type"

export const loginUser = (res) =>{
    return {
        type: LOGIN_ACTION_TYPE.LOGIN,
        payload: res
    }
}
export const logOutUser = (res) =>{
  console.log('1');
  return {
      type: LOGIN_ACTION_TYPE.LOGOUT,
      payload: res
  }
}

export const GetUserData = (res) => {
    return {
      type: LOGIN_ACTION_TYPE.GETDATAUSER,
      payload: res,
    }
  }