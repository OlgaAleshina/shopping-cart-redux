import { ADD_ONE, MINUS_ONE, ADD_TO_CART } from "../actions/actions";

const initialState = {
    items: [
        { id: 1, name: "potato", price: 10, unit: "kg", quantity: 0, inStock: 10 },
        { id: 2, name: "apple", price: 16, unit: "kg", quantity: 0, inStock: 10 },
        { id: 3, name: "banana", price: 60, unit: "kg", quantity: 0, inStock: 10 },
        { id: 4, name: "milk", price: 75, unit: "liter", quantity: 0, inStock: 5 }
    ],
    itemsInCart: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            let addedItem = state.items.find(item => item.id === action.id)
            return {
                ...state,
                itemsInCart: [...state.itemsInCart, addedItem],
            };


        case ADD_ONE:
            return {
                number: state.number + 1
            };

        case MINUS_ONE:
            return {
                quantity: state.items.quantity - 1
            };
        default:
            return state;
    }
}

export default rootReducer;

