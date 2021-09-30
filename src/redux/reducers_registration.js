import { combineReducers } from 'redux'
import { loginReducer } from '../page/login/logic/login_reducer'
import { productReducer } from '../page/product/logic/product_reducer'
import { registerReducer } from '../page/register/logic/register_reducer'
import { notificationReducer } from './common/notification/notification_reducer'

const rootReducer = combineReducers({
    register: registerReducer,
    notificationReducer: notificationReducer,
    loginReducer: loginReducer,
    productReducer: productReducer,
})

export default rootReducer