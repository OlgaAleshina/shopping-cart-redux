import { ADD_ONE, MINUS_ONE } from "../actions/actions";

const initialState = {
    number: 0,
    items: [
        { id: 1, name: "potato", price: 10, unit: "kg", quantity: 0, inStock: 10 },
        { id: 2, name: "apple", price: 16, unit: "kg", quantity: 0, inStock: 10 },
        { id: 3, name: "banana", price: 60, unit: "kg", quantity: 0, inStock: 10 },
        { id: 4, name: "milk", price: 75, unit: "l", quantity: 0, inStock: 5 }
    ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
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

