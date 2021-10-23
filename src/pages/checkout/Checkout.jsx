import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import CartItem from "../../Components/cart-item/CartItem";
import ChekoutItem from "../../Components/chekout-item/ChekoutItem";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import "./Checkout.scss";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__block">
          <span>Product</span>
        </div>
        <div className="checkout__block">
          <span>Description</span>
        </div>
        <div className="checkout__block">
          <span>Price</span>
        </div>
        <div className="checkout__block">
          <span>Quantity</span>
        </div>
        <div className="checkout__block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <ChekoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
