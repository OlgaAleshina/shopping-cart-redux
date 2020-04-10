import { ADD_ONE, MINUS_ONE } from "../actions";

const initialState = {
    items: [
        { name: "potato", price: 10, unit: "kg", quantity: 0, inStock: 10 },
        { name: "apple", price: 16, unit: "kg", quantity: 0, inStock: 10 },
        { name: "banana", price: 60, unit: "kg", quantity: 0, inStock: 10 },
        { name: "milk", price: 75, unit: "l", quantity: 0, inStock: 5 }
    ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {
                items: [
                    ...state.items,
                    {
                        quantity: state.items.quantity + 1
                    }
                ]
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

