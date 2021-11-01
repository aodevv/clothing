import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyled = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyled : buttonStyles;
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;

  font-size: 16px;
  border: 1px solid black;
  padding: 0px 35px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.1s linear;

  ${getButtonStyles}
`;
