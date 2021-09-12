import { NOTIFICATION_ACTION_TYPE } from "./action_notification_type";

export const PushNewNotification = (newNotification) => {
  return {
    notification: newNotification,
    type: NOTIFICATION_ACTION_TYPE.PUSH_NEW_NOTIFICATION,
  };
};
