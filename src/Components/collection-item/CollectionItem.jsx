import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  Img,
  CollectionButton,
  CollectionFooterContainer,
  Name,
  Price,
} from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Img
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooterContainer>
      <CollectionButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CollectionButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
