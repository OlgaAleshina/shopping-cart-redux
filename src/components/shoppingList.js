import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../actions/actions"

class ShoppingList extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    };


    render() {
        const items = this.props.items.map((item) => (
            <tr id={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price} RUB</td>
                <td>{item.unit}</td>
                <td>

                    {item.quantity}
                    <Button onClick={() => { this.handleClick(item.id) }} variant="success">
                        +
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
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
