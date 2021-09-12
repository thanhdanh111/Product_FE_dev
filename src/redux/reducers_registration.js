import { combineReducers } from 'redux'
import { registerReducer } from '../page/register/logic/register_reducer'
import { notificationReducer } from './common/notification/notification_reducer'

const rootReducer = combineReducers({
    register: registerReducer,
    notificationReducer: notificationReducer, 
})

export default rootReducer