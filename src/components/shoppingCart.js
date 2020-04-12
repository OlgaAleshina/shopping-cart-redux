import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteFromCart } from "../actions/actions";

class ShoppingCart extends Component {

    handleclick = (id) => this.props.deleteFromCart(id);

    render() {
        let total = this.props.total;
        let itemsInCart = this.props.itemsInCart.map(item => (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price} RUB</td>
                <td>{item.quantity} </td>
                <td>
                    {item.subtotal} RUB <Button onClick={() => { this.handleclick(item.id) }} variant="danger"> X </Button>
                </td>
            </tr>
        ))

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
                        {itemsInCart}
                        <tr>
                            <td colSpan="4" className="text-right">TOTAL</td>
                            <td>{total} RUB</td>
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
        itemsInCart: state.itemsInCart,
        total: state.total
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        deleteFromCart: (id) => { dispatch(deleteFromCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
