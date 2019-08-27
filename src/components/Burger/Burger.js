import React, { Component } from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background: none;
  border: none;
  padding: 20px 32px;
  z-index: 9999;
  cursor: pointer;

  div {
    width: 28px;
    height: 2px;
    background-color: #fff;
    display: block;
    @media (min-width: 768px) and (orientation: portrait) {
      width: 30px;
    }
  }

  div:nth-child(1),
  div:nth-child(3) {
    display: block;
    position: absolute;
  }
  div:nth-child(1) {
    transform: translateY(-350%);
  }
  div:nth-child(3) {
    transform: translateY(350%);
  }
`;

class Burger extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <StyledBurger className={"burger"}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  }
}

export default Burger;
