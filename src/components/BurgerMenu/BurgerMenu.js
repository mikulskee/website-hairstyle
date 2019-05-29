import React from "react";
import styled from "styled-components";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c1c9d0;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(106%)")};
  transition: transform 0.25s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
`;

const BurgerMenu = props => {
  return (
    <StyledWrapper isOpen={props.isOpen}>
      <NavigationMenu isOpen={props.isOpen} />
    </StyledWrapper>
  );
};

export default BurgerMenu;
