import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  margin-left: 10px;

  cursor: pointer;
`;

export const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const ItemsCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  top: 50%;
  right: 50%;
  transform: translate(25%, -44%);
`;
