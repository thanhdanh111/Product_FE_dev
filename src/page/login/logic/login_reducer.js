import axios from 'axios';
import { URL } from '../../../helper/URL';
import { pushNewNotifications } from '../../../redux/common/notification/notification_reducer';
import { loginUser, GetUserData } from './login_action';
import { LOGIN_ACTION_TYPE } from './login_action_type';

const token = localStorage.getItem('access_token');
const initialState = {
	isAuthenticated: token ? true : false,
	userInfor: {},
	tokenUser: token ? token : '',
};
export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ACTION_TYPE.LOGIN:
			return {
				...state,
				tokenUser: action.payload.token,
				isAuthenticated: action.payload.isAuthenticated,
			};
		case LOGIN_ACTION_TYPE.GETDATAUSER:
			return {
				...state,
				userInfor: action.payload,
			};

			case LOGIN_ACTION_TYPE.LOGOUT:
				console.log('asdas');
				return {
					...state,
					isAuthenticated: false,
				};
		default:
			return state;
	}
};

export const loginThunkUser = (email, password) => async (dispatch) => {
	try {
		const res = await axios.post(
			`${URL}/login`,
			{
				email,
				password,
			},
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		);
		if (res) {
			dispatch(pushNewNotifications({ variant: 'success', message: 'Login success' }));
			dispatch(
				loginUser({
					token: res?.data?.token,
					isAuthenticated: true,
				})
			);
			localStorage.setItem('access_token', res?.data?.token);
		}
	} catch (error) {
		dispatch(pushNewNotifications({ variant: 'error', message: 'Login Failed' }));
	}
};

export const getDataThunkUser = (token) => async (dispatch, getState) => {
	try {
		const getToken = getState().loginReducer.tokenUser
		const res = await axios.get(`${URL}/user/me`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getToken}`,
			},
		});
		if (res) {
			dispatch(pushNewNotifications({ variant: 'success', message: 'Get user success' }));
			dispatch(GetUserData(res?.data));
		}
	} catch (error) {
		dispatch(pushNewNotifications({ variant: 'error', message: 'Failed' }));
	}
};
