import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart, substractOneFromCart } from "../actions/actions"

class ShoppingList extends Component {
    handleAdd = (id) => this.props.addToCart(id);
    handleSubstract = (id) => this.props.substractOneFromCart(id);

    render() {
        let items = this.props.items.map((item) => (
            <tr id={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price} RUB</td>
                <td>{item.unit}</td>
                <td>
                    <Button onClick={() => { this.handleSubstract(item.id) }} variant="secondary">-</Button>
                    <Button onClick={() => { this.handleAdd(item.id) }} variant="success">+</Button>
                    <Button
                        onClick={() => { this.handleAdd(item.id) }}
                        disabled={item.inStock > 0 ? '' : 'disabled'}>
                        {item.inStock > 0 ? 'Add to cart' : 'Sold Out'}
                    </Button>
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
                    {items}

                </thead>
                <tbody />
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        substractOneFromCart: (id) => { dispatch(substractOneFromCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
