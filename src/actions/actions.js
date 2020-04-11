export const ADD_ONE = "ADD_ONE";
export const MINUS_ONE = "MINUS_ONE";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const CLEAR_CART = "CLEAR CART";


export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}