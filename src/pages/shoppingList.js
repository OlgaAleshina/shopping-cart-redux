import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";

class ShoppingList extends Component {
    addOne = () => {
        this.props.dispatch({ type: "ADD_ONE" });
    };
    minusOne = () => {
        this.props.dispatch({ type: "MINUS_ONE" });
    };

    render() {
        const items = this.props.items.map((item, index) => (
            <tr id={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.price} RUB</td>
                <td>{item.unit}</td>
                <td>
                    <Button onClick={this.addOne} variant="danger">
                        -
          </Button>
                    {item.quantity}
                    <Button onClick={this.minusOne} variant="success">
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

export default connect(mapStateToProps)(ShoppingList);
