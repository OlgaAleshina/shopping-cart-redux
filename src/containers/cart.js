import React, { useState } from "react";
import { Button, Table, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ConfirmModal from "../components/confirmModal";


const ShoppingCart = () => {
    const itemsInCart = useSelector(state => state.itemsInCart);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();
    const [showConfirmation, setShowConfirmation] = useState(false);


    let itemsInCartList = []
        ? ""
        : itemsInCart.map(item => (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price} RUB</td>
                <td>{item.quantity} </td>
                <td>
                    {item.subtotal} RUB{" "}
                    <Button
                        onClick={() => dispatch({ type: "DELETE_ITEM_FROM_CART", id: item.id })}
                        variant="danger"
                    >
                        X
        </Button>
                </td>
                <td>{item.inStock} left </td>
            </tr>
        ));

    return (
        <>
            <h4 className="text-center">Your Purchase</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsInCartList}
                    <tr>
                        <td colSpan="4" className="text-right">
                            TOTAL
            </td>
                        <td>{total} RUB</td>
                    </tr>
                </tbody>
            </Table>
            <Row className="text-center">
                <Button onClick={() => setShowConfirmation(true)} className="m-auto" variant="danger">
                    Clear the cart
      </Button>
            </Row>
            <ConfirmModal
                isShown={showConfirmation}
                handleClick={() => {
                    dispatch({ type: "CLEAR_CART" });
                    setShowConfirmation(false);
                }}
                handleClose={() => setShowConfirmation(false)}
            />
        </>
    );
};

export default ShoppingCart;