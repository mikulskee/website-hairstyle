import React from "react";
import styled from "styled-components";
import logoMain from "../../assets/images/logo-main.svg";
import IconSVG from "../IconSVG/IconSVG";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20%);
  svg {
    width: 240px;
    transform: translateX(-10%);

    @media only screen and (min-width: 768px) {
      width: 350px;
    }
    @media only screen and (min-width: 1024px) {
      width: 420px;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 60px;
  }
`;

const StyledUl = styled.ul`
  height: 100%;
  color: black;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 500px) and (orientation: landscape) {
    justify-content: space-around;
    align-items: center;
  }

  @media only screen and (min-height: 811px) and (orientation: portrait) {
    justify-content: start;
    padding-top: 100px;
  }

  @media only screen and (orientation: landscape) {
    flex-direction: row;
  }
`;

const StyledLink = styled.li`
  margin-bottom: 15%;
  text-align: center;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 480px) and (orientation: landscape) {
    margin: 10px;
  }
  @media only screen and (min-height: 811px) and (orientation: portrait) {
    margin-bottom: 0;
    margin-top: 17%;
  }
  @media only screen and (min-width: 768px) and (min-height: 700px) {
    margin-top: 12%;
    width: 200px;
  }

  a {
    cursor: pointer;
    border: 2px solid black;
    position: relative;
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px 20px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 3px;
    height: 100%;
    width: 100%;

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-5%, 12%);
      display: block;
      content: "";
      height: 110%;
      width: 110%;
      background-color: #cd97c4;
      z-index: -1;
      transition: transform 0.25s ease, width 0.25s ease, height 0.25s ease;
    }

    :hover::before {
      transform: translate(0, 0);
      height: 100%;
      width: 100%;
    }

    @media only screen and (min-width: 500px) and (orientation: landscape) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) and (min-height: 700px) {
      font-size: 22px;
      padding: 5px 0;
    }
  }

  a.active::before {
    transform: translate(0, 0);
    height: 100%;
    width: 100%;
  }
`;

const NavigationMenu = props => {
  return (
    <>
      <StyledHeader className={"logo"}>
        <IconSVG src={logoMain} />
      </StyledHeader>
      <StyledUl>
        <StyledLink>
          <NavLink to={"/"} exact onClick={props.setLoader}>
            home
          </NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to={"/about"} onClick={props.setLoader}>
            o mnie
          </NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to={"/contact"} onClick={props.setLoader}>
            kontakt
          </NavLink>
        </StyledLink>
      </StyledUl>
    </>
  );
};

export default NavigationMenu;
