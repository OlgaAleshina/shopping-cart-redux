import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "../components/productsComponent";



const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const productsList = products.map(item => (
        <ProductComponent
            product={item}
            handleSubstractOne={() =>
                dispatch({ type: "SUBSTRACT_ONE", id: item.id })
            }
            handleAddOne={() => dispatch({ type: "ADD_TO_CART", id: item.id, product: item })}
        />
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
