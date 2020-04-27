import { ADD_TO_CART, SUBSTRACT_ONE } from "../actions/actions";

const initialState = {
    products: [
        { id: 1, name: "potato", price: 10, unit: "kg", quantity: 0, inStock: 2 },
        { id: 2, name: "apple", price: 16, unit: "kg", quantity: 0, inStock: 10 },
        { id: 3, name: "banana", price: 60, unit: "kg", quantity: 0, inStock: 10 },
        { id: 4, name: "milk", price: 75, unit: "liter", quantity: 0, inStock: 5 }
    ]
}
    ;
function productsReducer(state = initialState, action) {
    let choosenItem = state.products.find(item => item.id === action.id);
    switch (action.type) {
        case ADD_TO_CART:
            choosenItem.quantity += 1;
            choosenItem.inStock -= 1;

            return Object.assign({}, state, {
                products: [...state.products],

            });

        case SUBSTRACT_ONE:
            choosenItem.quantity -= 1;
            choosenItem.inStock += 1;
            return Object.assign({}, state, {
                products: [...state.products]
            });

        default:
            return state;
    }
}

export default productsReducer;
