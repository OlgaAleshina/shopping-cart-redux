import shoppingCartReducer from "./shoppingCartReducer";
import shoppingListReducer from "./shoppingListReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    items: shoppingListReducer,
    itemsInCart: shoppingCartReducer
});

export default reducers;
