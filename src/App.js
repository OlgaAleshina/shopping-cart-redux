import React from "react";
import ShoppingList from "./pages/shoppingList";
import { Container } from "react-bootstrap"
//import ShoppingCart from "./pages/shoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Container>
      <h1>Shopping Cart React Redux</h1>
      <ShoppingList />
      <hr />

    </Container>
  );
}
