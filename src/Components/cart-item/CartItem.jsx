import React from "react";

import {
  CartItemContainer,
  CartItemDetails,
  CartItemImg,
} from "./CartItem.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt="item" />
      <CartItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
