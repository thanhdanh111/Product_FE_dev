import axios from 'axios';
import { convertArrayToObject } from '../../../helper/convertArrayToObject';
import { URL } from '../../../helper/URL';
import { pushNewNotifications } from '../../../redux/common/notification/notification_reducer';
import { createProduct, deleteProduct, getProduct, getProducts } from './product_action';
import { PRODUCT_ACTION_TYPE } from './product_action_type';

const initialState = {
	products: {},
	currentProduct: {
        _id:''
    },
};
export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_ACTION_TYPE.GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case PRODUCT_ACTION_TYPE.GET_PRODUCTS:
			return {
				...state,
				currentProduct: action.payload,
			};

			case PRODUCT_ACTION_TYPE.DELETE_PRODUCTS:
				const products = { ...state.products };
      			delete products[action.payload]
			return {
				...state,
				products: products
			};

			case PRODUCT_ACTION_TYPE.CREATE_PRODUCTS:
				return{
					...state,
					products: {...state.products,[action.payload._id]: action.payload},
				}
			
		default:
			return state;
	}
};

export const getAllProductThunk = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('access_token');
		const res = await axios.get(`${URL}/products`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		if (res) {
			const data = convertArrayToObject(res.data,'_id')
			dispatch(getProducts(data));
			dispatch(pushNewNotifications({ variant: 'success', message: 'Get products success' }));
		}
	} catch (error) {
		dispatch(pushNewNotifications({ variant: 'error', message: 'Get products fail' }));
	}
};

export const getProductThunk = (id) => async (dispatch) => {
	try {
		const token = localStorage.getItem('access_token');
		const res = await axios.get(`${URL}/product/${id}`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		if (res) {
            const product = convertArrayToObject(res.data,'_id')
			dispatch(getProduct(product[id]));
			dispatch(pushNewNotifications({ variant: 'success', message: 'Get product success' }));
		}
	} catch (error) {
		dispatch(pushNewNotifications({ variant: 'error', message: 'Get product fail' }));
	}
};

export const createProductThunk = (formData) => async (dispatch) => {
	try {
		const token = localStorage.getItem('access_token');
		const res = await axios({
			method: 'POST',
			url: `${URL}/products`,
			headers: {
				authorization: `Bearer ${token}`,
			},
			data: formData,
		});
		if (res) {
			const data = convertArrayToObject(res.data,'_id')
			dispatch(createProduct(data))
			dispatch(pushNewNotifications({ variant: 'success', message: 'Create product success' }));
		}
	} catch (error) {
		dispatch(pushNewNotifications({ variant: 'error', message: 'Create product fail' }));
	}
};


export const DeleteProduct = (id) => async (dispatch) => {
	try {
		const token = localStorage.getItem('access_token');
		const res = await axios({
			method: 'DELETE',
			url: `${URL}/product/${id}`,
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
		if (res) {
			dispatch(deleteProduct(id))
			dispatch(getProduct({_id:''}))
			dispatch(pushNewNotifications({ variant: 'success', message: 'Delete product success' }));
		}
	} catch (error) {
		console.log(error);
		dispatch(pushNewNotifications({ variant: 'error', message: 'Delete product fail' }));
	}
};
