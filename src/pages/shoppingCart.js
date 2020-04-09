import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";

class ShoppingCart extends Component {
    render() {
        const items = this.props.itemsInCart;

        return (
            <>
                <ListGroup horizontal >
                    <ListGroup.Item>Name</ListGroup.Item>
                    <ListGroup.Item>Price</ListGroup.Item>
                    <ListGroup.Item>Total</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal id={1}>
                    <ListGroup.Item>{items.name}</ListGroup.Item>
                    <ListGroup.Item>{items.price}</ListGroup.Item>
                    <ListGroup.Item>{items.quantity}</ListGroup.Item>
                    <Button variant="danger"> - </Button>
                </ListGroup>
                <Button variant="danger">Clear the cart</Button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemsInCart: state.itemsInCart
    };
};

export default connect(mapStateToProps)(ShoppingCart);
