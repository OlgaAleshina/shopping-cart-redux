import { createStore } from "redux";
import reducers from "./reducers/reducers";

let initialState = {
    items: [
        { name: "potato", price: 10, unit: "kg", quantity: 0, inStock: 10 },
        { name: "apple", price: 16, unit: "kg", quantity: 0, inStock: 10 },
        { name: "banana", price: 60, unit: "kg", quantity: 0, inStock: 10 },
        { name: "milk", price: 75, unit: "l", quantity: 0, inStock: 5 }
    ],
    itemsInCart: [
        { name: "none", price: 0, quantity: 0, total: 0 }],
    visibility: "AWESOME_TAG"
};

export default createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
