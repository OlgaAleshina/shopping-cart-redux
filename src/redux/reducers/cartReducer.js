import {
    ADD_TO_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_CART
} from "../actions/actions";


function cartReducer(cart = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            let newCart = cart.slice()
            newCart.splice(action.id, 0, action.product)
            return newCart



        case DELETE_ITEM_FROM_CART:
            return cart.filter(item => item.id !== action.id);

        case CLEAR_CART:
            return cart.splice();

        default:
            return cart;
    }
}

export default cartReducer;
