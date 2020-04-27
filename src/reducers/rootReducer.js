
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
            if (state.itemsInCart.indexOf(action.id) !== -1) {
                return state
            }

            return Object.assign({}, state, {
                itemsInCart: [...state.itemsInCart, state.items.find(item => item.id === action.id)],
            });


        case SUBSTRACT_ONE:
            //return state.items[action.id].inStock -= 1
            ;

        case DELETE_ITEM_FROM_CART:
            return Object.assign({}, state, {
                itemsInCart: state.itemsInCart.filter(item => item.id !== action.id)
            });

        case CLEAR_CART:
            return Object.assign({}, state, {
                itemsInCart: [],
            });

        default:
            return state;
    }
}


//selectors
export function getProducts(state) {
    return state.items;
}
export function getCartList(state) {
    return state.itemsInCart;
}

export function substractFromStock(item) {
    return item.inStock - 1;
}

export function getSubtotal(item, id) {
    return item[id].price * item[id].quantity;
}
export function getTotal(item) {
    return item.reduce((a, b) => a + b);
}


export default rootReducer;