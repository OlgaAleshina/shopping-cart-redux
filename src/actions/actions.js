
export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const SUBSTRACT_ONE = "SUBSTRACT_ONE";
export const substractOneFromCart = (id) => {
    return {
        type: SUBSTRACT_ONE,
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

export const CLEAR_CART = "CLEAR CART";
export const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};