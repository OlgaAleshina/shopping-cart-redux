
import { ADD_TO_CART, SUBSTRACT_ONE, DELETE_ITEM_FROM_CART, CLEAR_CART } from "../actions/actions";

const initialState =
{
    items: [
        { id: 1, name: "potato", price: 10, unit: "kg", quantity: 0, inStock: 2 },
        { id: 2, name: "apple", price: 16, unit: "kg", quantity: 0, inStock: 10 },
        { id: 3, name: "banana", price: 60, unit: "kg", quantity: 0, inStock: 10 },
        { id: 4, name: "milk", price: 75, unit: "liter", quantity: 0, inStock: 5 }
    ],
    itemsInCart: [],
    total: 0
}
    ;

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            return Object.assign({}, state, {

                itemsInCart: [...state.itemsInCart, state.items.find(item => item.id === action.id)],
                total: state.total + state.items[action.id - 1].price
            });


        case SUBSTRACT_ONE:
            ;

        case DELETE_ITEM_FROM_CART:
            return Object.assign({}, state, {

                itemsInCart: state.itemsInCart.filter(item => item.id !== action.id)
            });

        case CLEAR_CART:
            ;

        default:
            return state;
    }
}






export default rootReducer;