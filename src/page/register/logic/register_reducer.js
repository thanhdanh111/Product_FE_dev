import axios from "axios";
import { URL } from "../../../helper/URL";
import { pushNewNotifications } from "../../../redux/common/notification/notification_reducer";
import { registerUser } from "./register_action";
import { REGISTER_ACTION_TYPE } from "./register_action_type";

const initialState = {
  registerUser: {}
}
export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_ACTION_TYPE.REGISTER :
            return {
                ...state,
                registerUser : action.payload,
            }
        default :
          return state
        
    }
}


export const registerThunkUser = (email, password)=> async (dispatch) => {
    try { 
        const res  = await axios.post(`${URL}/register`,
        {
          email,
          password
        },
            {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            }
          );
      if(res){
          dispatch(pushNewNotifications({variant: 'success', message: 'Register success'}))
          dispatch(registerUser(res?.data))
          
      }
    }
    catch (err) {
      dispatch(pushNewNotifications({variant: 'error', message: 'Register Failed'}))
    }

}