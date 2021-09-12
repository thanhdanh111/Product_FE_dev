import { REGISTER_ACTION_TYPE } from "./register_action_type"

export const registerUser = (res) =>{
    return {
        type: REGISTER_ACTION_TYPE.REGISTER,
        payload: res
    }
}