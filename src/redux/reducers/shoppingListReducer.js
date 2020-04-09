import { SHOW_SHOPPING_LIST } from "../actions";

function visibileShoppingList(visibility = SHOW_SHOPPING_LIST, action) {
    switch (action.type) {
        case SHOW_SHOPPING_LIST:
            return SHOW_SHOPPING_LIST;

        default:
            return visibility;
    }
}

export default visibileShoppingList;
