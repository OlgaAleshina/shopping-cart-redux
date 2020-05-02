import { ADD_TO_CART, SUBSTRACT_ONE, CLEAR_CART, DELETE_ITEM_FROM_CART } from "../actions/actions";

function productsReducer(products = [], action) {

    let updatedProducts = products.slice();
    let product = updatedProducts.find(item => item.id === action.id);

    switch (action.type) {
        case ADD_TO_CART:

            return products.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        quantity: action.product.quantity + 1,
                        inStock: action.product.inStock - 1
                    }
                }
                return item;
            });

        // product.quantity += 1;
        // product.inStock -= 1;
        // return updatedProducts;

        case SUBSTRACT_ONE:

            product.quantity -= 1;
            product.inStock += 1;
            return updatedProducts;

        case DELETE_ITEM_FROM_CART:
            return products.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        quantity: products[action.id].quantity,
                        inStock: products[action.id].inStock
                    }
                }
                return item;
            });

        case CLEAR_CART:
            return products.slice();

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
