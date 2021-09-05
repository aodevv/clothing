import React from "react";
import Button from "../button/Button";

import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default Cart;
