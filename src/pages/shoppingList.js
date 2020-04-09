import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";

class ShoppingList extends Component {
    render() {
        const items = this.props.items.map((item, index) => (
            <ListGroup horizontal id={index}>
                <ListGroup.Item>{item.name}</ListGroup.Item>
                <ListGroup.Item>{item.price} RUB</ListGroup.Item>
                <ListGroup.Item>{item.unit} </ListGroup.Item>
                <Button variant="success"> + </Button>
                <ListGroup.Item>{item.quantity}</ListGroup.Item>
                <Button variant="danger"> - </Button>
            </ListGroup>
        ));

        return (
            <>
                <ListGroup horizontal>
                    <ListGroup.Item>Name</ListGroup.Item>
                    <ListGroup.Item>Price</ListGroup.Item>
                    <ListGroup.Item>Unit</ListGroup.Item>
                    <ListGroup.Item>Total</ListGroup.Item>
                </ListGroup>
                {items}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps)(ShoppingList);
