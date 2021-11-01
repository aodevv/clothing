import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemsCount,
} from "./CartIcon.styles";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCart}>
      <StyledShoppingIcon className="shopping-icon" />
      <ItemsCount>{itemCount}</ItemsCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
