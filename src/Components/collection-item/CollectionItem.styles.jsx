import styled from "styled-components";
import Button from "../button/Button";

export const Img = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: all 200ms;
`;

export const CollectionButton = styled(Button)`
  width: 80%;
  opacity: 0;
  position: absolute;
  bottom: 40px;
  display: none;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${Img} {
      opacity: 0.8;
    }

    ${CollectionButton} {
      opacity: 0.85;
      display: block;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
