import React from "react";
import { Button } from "react-bootstrap";

const productComponent = ({ product, handleSubstractOne, handleAddOne }) => {
    return (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price} RUB</td>
            <td>{product.unit}</td>
            <td>
                <Button
                    className="m-1"
                    onClick={handleSubstractOne}
                    disabled={product.quantity > 0 ? "" : "disabled"}
                    variant="secondary"
                >
                    -
        </Button>
                <Button variant="outline-secondary">{product.quantity}</Button>
                <Button
                    className="m-1"
                    onClick={handleAddOne}
                    disabled={product.inStock > 0 ? "" : "disabled"}
                    variant="success"
                >
                    {product.inStock > 0 ? "+" : "Sold Out"}
                </Button>

                {product.inStock}
            </td>
        </tr>
    );
};

export default productComponent;
