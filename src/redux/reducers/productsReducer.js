import { ADD_TO_CART, SUBSTRACT_ONE, CLEAR_CART } from "../actions/actions";

function productsReducer(products = [], action) {
    let product = products.find(item => item.id === action.id);
    let updatedProducts = products.slice();

    switch (action.type) {
        case ADD_TO_CART:
            product.quantity += 1;
            product.inStock -= 1;
            return updatedProducts;

        case SUBSTRACT_ONE:
            product.quantity -= 1;
            product.inStock += 1;
            return [...products];

        case CLEAR_CART:
            return products;

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
