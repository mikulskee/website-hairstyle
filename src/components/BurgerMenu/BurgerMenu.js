import React from "react";
import styled from "styled-components";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c1c9d0;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const BurgerMenu = props => {
  return (
    <StyledWrapper className={"burgerMenu"}>
      <NavigationMenu setLoader={props.setLoader} />
    </StyledWrapper>
  );
};

export default BurgerMenu;
