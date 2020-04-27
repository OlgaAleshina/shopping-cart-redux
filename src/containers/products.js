import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import getProducts from "../reducers/rootReducer"


const ProductList = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const productsList = products.map(item => (
        <tr id={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price} RUB</td>
            <td>{item.unit}</td>
            <td>

                <Button
                    className="m-1"
                    onClick={() => dispatch({ type: "SUBSTRACT_ONE", id: item.id })}
                    disabled={item.quantity > 0 ? "" : "disabled"}
                    variant="secondary"
                >
                    -
        </Button>
                <Button variant="outline-secondary">{item.quantity}</Button>
                <Button
                    className="m-1"
                    onClick={() => {
                        dispatch({ type: "ADD_TO_CART", id: item.id });
                        dispatch({ type: "COUNT_TOTAL" });
                    }}
                    disabled={item.inStock > 0 ? "" : "disabled"}
                    variant="success"
                >
                    {item.inStock > 0 ? "+" : "Sold Out"}
                </Button>

                {item.inStock}
            </td>
        </tr>
    ));

    return (
        <Table striped bordered hover>
            <thead>
                <tr id={"list"}>
                    <th>#</th>
                    <th> Name</th>
                    <th>Price</th>
                    <th>Unit</th>
                    <th>Total</th>
                </tr>
                {productsList}
            </thead>
            <tbody />
        </Table>
    );
};

export default ProductList;
