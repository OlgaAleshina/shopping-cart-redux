import {
    ADD_TO_CART,
    DELETE_ITEM_FROM_CART, SUBSTRACT_ONE,
    CLEAR_CART
} from "../actions/actions";


function cartReducer(cart = [], action) {
    const productInCart = cart.find(item => item.id === action.id);
    const { product } = action;

    switch (action.type) {

        case ADD_TO_CART:

            product.quantity = 1;
            if (!productInCart) {
                return [...cart, product]
            } else {
                return cart.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            quantity: product.quantity + 1,
                            inStock: product.inStock - 1
                        }
                    }
                    return item;
                });
            }


        case SUBSTRACT_ONE:

            if (productInCart.quantity === 1) {
                return cart.filter(item => item.id !== action.id);
            } else {
                return cart.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            quantity: productInCart.quantity - 1,
                            inStock: productInCart.inStock + 1
                        }
                    }
                    return item;
                });
            }


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
