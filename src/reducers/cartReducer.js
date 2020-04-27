import {
    ADD_TO_CART,
    DELETE_ITEM_FROM_CART,
    RECEIVE_PRODUCTS,
    CLEAR_CART
} from "../actions/actions";

const initialState = {
    cart: []
};

function cartReducer(state = initialState, action) {
    let cart = state.cart;
    switch (action.type) {
        case ADD_TO_CART:
            cart.push(action.payload);

            return Object.assign({}, state, {
                cart: [...state.cart],

            });
        case RECEIVE_PRODUCTS:

            return Object.assign({}, state, {
                cart: [...state.cart],

            });
        // case DELETE_ITEM_FROM_CART:
        //return Object.assign({}, state, {
        // itemsInCart: state.itemsInCart.filter(item => item.id !== action.id)
        // });

        case CLEAR_CART:
            return Object.assign({}, state, {
                itemsInCart: []
            });

        default:
            return state;
    }
}

export default cartReducer;
