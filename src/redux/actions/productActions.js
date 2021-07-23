import { ActionTyeps } from "../constants/action-types"


export const setProducts = (products) => {
    return {
        type: ActionTyeps.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProducts = (products) => {
    return {
        type: ActionTyeps.SELECTED_PRODUCT,
        payload: product,
    }
}