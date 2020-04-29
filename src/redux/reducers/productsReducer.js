import { ADD_TO_CART, SUBSTRACT_ONE } from "../actions/actions";

function productsReducer(products = [], action) {
    let product = products.find(item => item.id === action.id);

    switch (action.type) {
        case ADD_TO_CART:
            product.quantity += 1;
            product.inStock -= 1;
            return [...products];

        case SUBSTRACT_ONE:
            product.quantity -= 1;
            product.inStock += 1;
            return [...products];

        default:
            return products;
    }
}

//selectors
/*export function getProducts(state) {
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
}*/

export default productsReducer;
