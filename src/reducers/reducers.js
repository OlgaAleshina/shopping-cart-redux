import { ADD_TO_CART, DELETE_ITEM_FROM_CART } from "../actions/actions";

const initialState = {
    items: [
        { id: 1, name: "potato", price: 10, unit: "kg", quantity: 0, inStock: 10 },
        { id: 2, name: "apple", price: 16, unit: "kg", quantity: 0, inStock: 10 },
        { id: 3, name: "banana", price: 60, unit: "kg", quantity: 0, inStock: 10 },
        { id: 4, name: "milk", price: 75, unit: "liter", quantity: 0, inStock: 5 }
    ],
    itemsInCart: [],
    total: 0
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            let addedItem = state.items.find(item => item.id === action.id);
            let existedItem = state.itemsInCart.find(item => item.id === action.id);


            if (existedItem) {
                existedItem.quantity += 1;
                existedItem.subtotal = existedItem.price * existedItem.quantity;
                return {
                    ...state,
                    total: state.total + addedItem.price,

                }
            } else {
                addedItem.quantity = 1;
                addedItem.subtotal = addedItem.price * addedItem.quantity;
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart, addedItem],
                    total: state.total + addedItem.price,
                }
            }
            ;
        case DELETE_ITEM_FROM_CART:
            let filteredCart = state.itemsInCart.filter(item => action.id !== item.id);
            let removedItem = state.itemsInCart.find(item => action.id === item.id);
            let updatedTotal = state.total - removedItem.subtotal;
            return {
                ...state,
                itemsInCart: filteredCart,
                total: updatedTotal
            };


        default:
            return state;
    }
}

export default rootReducer;

