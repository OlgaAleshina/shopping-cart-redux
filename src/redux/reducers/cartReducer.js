import {
    ADD_TO_CART,
    DELETE_ITEM_FROM_CART, SUBSTRACT_ONE,
    CLEAR_CART
} from "../actions/actions";


function cartReducer(cart = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            //const isInCart = cart.includes(action.id);
            const isInCart = cart.find(item => item.id === action.id);

            if (!isInCart) {
                return [...cart, action.product]
            } else {
                return cart.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            quantity: action.product.quantity + 1,
                            inStock: action.product.inStock - 1
                        }
                    }
                    return item;
                });
            }


        case SUBSTRACT_ONE:
            return cart;


        case DELETE_ITEM_FROM_CART:
            return cart.filter(item => item.id !== action.id);

        case CLEAR_CART:
            const newCart = cart.slice();
            return newCart.splice();

        default:
            return cart;
    }
}

export default cartReducer;
