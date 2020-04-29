import {
    ADD_TO_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_CART
} from "../actions/actions";


function cartReducer(state = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.product];


        case DELETE_ITEM_FROM_CART:
            return state.filter(item => item.id !== action.id);

        case CLEAR_CART:
            return Object.assign({}, state, {
                itemsInCart: []
            });

        default:
            return state;
    }
}

export default cartReducer;
