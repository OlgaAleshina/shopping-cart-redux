import { SHOW_CART } from "../actions";

function visibileCart(visibility = SHOW_CART, action) {
    switch (action.type) {
        case SHOW_CART:
            return SHOW_CART;

        default:
            return visibility;
    }
}

export default visibileCart;
