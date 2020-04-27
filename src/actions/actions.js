
export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (product) => {

    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: 1
        }
    }
};

/*export const ADD_TO_CART = "ADD_TO_CART";
export const addToCartUnsafe = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
export const addToCart = id => (dispatch, getState) => {
    if (getState().products.items[id].inStock > 0) {
        dispatch(addToCartUnsafe(id))
    }
}
*/

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

export const CLEAR_CART = "CLEAR_CART";
export const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};


export const RECEIVE_PRODUCTS = "RECIEVE_PRODUCTS";
const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const getAllProducts = () => (dispatch, getState) => {
    getState().items(products => {
        dispatch(receiveProducts(products));
    });
};

export const getProducts = () => {
    return (dispatch, getState) => {
        // grab current state
        //const state = getState();

        // get the JWT token out of it
        // (obviously depends on how your store is structured)
        //const itemsIncart = state.items;
        getState().items(products => {
            dispatch(receiveProducts(products));
        });
    };
};
