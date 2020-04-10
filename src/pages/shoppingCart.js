import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";

class ShoppingCart extends Component {
    render() {
        const item = this.props.itemsInCart;

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
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price} RUB</td>
                            <td>{item.quantity} </td>
                            <td>
                                {item.quantity} <Button variant="danger"> X </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button className="m-auto" variant="danger">
                    Clear the cart
        </Button>
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
