import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_ITEM_FROM_CART, CLEAR_CART } from "../actions/actions";

const ShoppingCart = () => {
    const itemsInCart = useSelector(state => state.shoppingCartReducer);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let itemsInCartList = itemsInCart ? "" : itemsInCart.map(item => (
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

            <Button onClick={() => setShow(true)} className="m-auto" variant="danger">
                Clear the cart
      </Button>

            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Body>Please, confirm the action </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button
                        variant="danger"
                        onClick={() => dispatch({ type: "CLEAR_CART" })}
                    >
                        Clear Cart
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ShoppingCart;