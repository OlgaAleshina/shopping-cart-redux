import React from "react";
import Products from "./containers/products";
import { Container } from "react-bootstrap"
import Cart from "./containers/cart";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Container>
      <h1 className="text-center">Shopping Cart React-Redux</h1>
      <Products />
      <hr />
      <Cart />
    </Container>
  );
}
