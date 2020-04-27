import { createStore, combineReducers } from "redux";
//import rootReducer from "./rootReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
    products: productsReducer,
    itemsInCart: cartReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
