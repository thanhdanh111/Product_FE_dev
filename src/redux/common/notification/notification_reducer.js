import { NOTIFICATION_ACTION_TYPE } from "./action_notification_type";
import { PushNewNotification } from "./notification_action";


const initialState= {
    variant: 'error',
    message: '',
  };
export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case NOTIFICATION_ACTION_TYPE.PUSH_NEW_NOTIFICATION:
  
        return {
          ...state,
          variant: action.notification.variant || 'error',
          message: action.notification.message || '',
        };
      default:
        return state;
    }
};

export const pushNewNotifications = (notification) => async (dispatch) => {
    try {
      await dispatch(PushNewNotification(notification));
    } catch (error) {
      await dispatch(PushNewNotification({ variant: 'error', message: String(error) }));
    }
  };