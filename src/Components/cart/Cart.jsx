import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cart/cart.actions";

import "./Cart.scss";
import { CartButton, CartContainer, CartItems, EmptyMsg } from "./Cart.styles";

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <CartContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMsg>Your cart is empty</EmptyMsg>
        )}
      </CartItems>
      <CartButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CartButton>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
