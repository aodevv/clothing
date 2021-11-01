import styled from "styled-components";
import Button from "../button/Button";

export const CartContainer = styled.div`
  width: 240px;
  height: 340px;
  background-color: white;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
  top: 100px;
  right: 70px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartButton = styled(Button)`
  margin: auto;
  margin-top: auto;
`;

export const EmptyMsg = styled.span`
  font-size: 18px;
  margin: auto;
`;
