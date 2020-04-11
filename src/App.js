import React from "react";
import ShoppingList from "./components/shoppingList";
import { Container } from "react-bootstrap"
import ShoppingCart from "./components/shoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Container>
      <h1 className="text-center">Shopping Cart React-Redux</h1>
      <ShoppingList />
      <hr />
      <ShoppingCart />
    </Container>
  );
}
