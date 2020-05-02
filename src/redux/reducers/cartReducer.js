import {
    ADD_TO_CART,
    DELETE_ITEM_FROM_CART, SUBSTRACT_ONE,
    CLEAR_CART
} from "../actions/actions";


function cartReducer(cart = [], action) {
    const newCart = cart.slice();
    switch (action.type) {
        case ADD_TO_CART:


            /*return cart.map((item, index) => {
                // Find the item with the matching id
                if (item.id === action.id) {
                    // Return a new object
                    return {
                        ...item,  // copy the existing item
                        quantity: action.product.quantity + 1,
                          // replace the email addr
                    }
                }
    
                // Leave every other item unchanged
                return item;
            });*/
            newCart.splice(action.id - 1, 0, action.product)
            return newCart;

        case SUBSTRACT_ONE:
            return cart;


        case DELETE_ITEM_FROM_CART:
            return cart.filter(item => item.id !== action.id);

        case CLEAR_CART:
            return newCart.splice();

        default:
            return cart;
    }
}

export default cartReducer;
