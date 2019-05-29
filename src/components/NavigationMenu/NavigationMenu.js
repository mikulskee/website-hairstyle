import React from "react";
import styled from "styled-components";
import logoMain from "../../assets/images/logo-main.svg";
import IconSVG from "../IconSVG/IconSVG";

const StyledHeader = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(20%)")};
  transition: opacity 0.5s 0.3s ease, transform 0.5s 0.3s ease;
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

const StyledNav = styled.ul`
  height: 100%;
  color: black;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 500px) and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 50px 85px 20px 85px;
  }

  @media only screen and (min-height: 811px) and (orientation: portrait) {
    justify-content: start;
  }
`;

const StyledLink = styled.li`
  position: relative;
  display: block;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 12%;
  border: 2px solid black;
  cursor: pointer;

  @media only screen and (min-width: 500px) and (orientation: landscape) {
    flex-basis: 40%;
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

  a {
    text-decoration: none;
    color: black;
    display: block;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 3px;
    height: 100%;
    width: 100%;
    @media only screen and (min-width: 500px) and (orientation: landscape) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) and (min-height: 700px) {
      font-size: 22px;
      padding: 5px 0;
    }
  }

  :hover::before {
    transform: translate(0, 0);
    height: 100%;
    width: 100%;
  }
`;

const titles = ["home", "o mnie", "opinie", "kontakt"];

const MenuLink = titles.map(title => (
  <StyledLink key={title}>
    <a href="/">{title}</a>
  </StyledLink>
));

const NavigationMenu = props => {
  return (
    <>
      <StyledHeader isOpen={props.isOpen}>
        <IconSVG src={logoMain} />
      </StyledHeader>
      <StyledNav>{MenuLink}</StyledNav>
    </>
  );
};

export default NavigationMenu;
