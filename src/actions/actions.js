export const MINUS_ONE = "MINUS_ONE";

export const CLEAR_CART = "CLEAR CART";


export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
export const deleteFromCart = (id) => {
    return {
        type: DELETE_ITEM_FROM_CART,
        id
    }
}