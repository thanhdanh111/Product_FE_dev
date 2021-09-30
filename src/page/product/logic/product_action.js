import { PRODUCT_ACTION_TYPE } from "./product_action_type"



export const getProducts = (res) => {
    return {
        type: PRODUCT_ACTION_TYPE.GET_ALL_PRODUCTS,
        payload: res
    }
}

export const getProduct = (res) => {
    return {
        type: PRODUCT_ACTION_TYPE.GET_PRODUCTS,
        payload: res
    }
}

export const createProduct = (res) => {
    return {
        type: PRODUCT_ACTION_TYPE.CREATE_PRODUCTS,
        payload: res
    }
}

export const deleteProduct = (res) => {
    return {
        type: PRODUCT_ACTION_TYPE.DELETE_PRODUCTS,
        payload: res
    }
}