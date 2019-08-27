import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  background: none;
  border: 2px solid black;
  margin-top: 30px;
  text-align: center;
  display: block;
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  font-size: 14px;
  padding: 10px 15px;
  cursor: pointer;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-3%, 12%);
    content: "";
    display: block;
    width: 106%;
    height: 110%;
    background-color: #cd97c4;
    z-index: -2;
    transition: transform 0.25s ease;
  }

  :hover::before {
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }
`;

const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
};

export default Button;
