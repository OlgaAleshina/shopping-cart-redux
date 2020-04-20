import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SUBSTRACT_ONE, ADD_TO_CART } from "../actions/actions";

const ProductList = () => {
    const items = useSelector(state => state.productListReducer);
    const dispatch = useDispatch();

    const itemsInList = items.map(item => (
        <tr id={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price} RUB</td>
            <td>{item.unit}</td>
            <td>
                {item.quantity}
                <Button
                    onClick={() => dispatch({ type: "SUBSTRACT_ONE", id: item.id })}
                    //disabled={item.quantity > 0 ? "" : "disabled"}
                    variant="secondary"
                >
                    -
        </Button>
                <Button
                    onClick={() => dispatch({ type: "ADD_TO_CART", id: item.id })}
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
                {itemsInList}
            </thead>
            <tbody />
        </Table>
    );
};

export default ProductList;
