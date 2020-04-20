import React from "react";
import ProductList from "./components/productList";
import { Container } from "react-bootstrap"
import ShoppingCart from "./components/shoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Container>
      <h1 className="text-center">Shopping Cart React-Redux</h1>
      <ProductList />
      <hr />
      <ShoppingCart />
    </Container>
  );
}
