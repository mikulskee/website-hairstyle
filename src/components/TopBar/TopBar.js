import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title/Title";
import SocialMenu from "../../components/SocialMenu/SocialMenu";
import Burger from "../../components/Burger/Burger";
import NavDesktop from "../../components/NavDesktop/NavDesktop";

const StyledUpperWrapper = styled.div`
  position: fixed;
  padding: 10px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  @media only screen and (min-width: 1024px) {
    justify-content: unset;
    position: fixed;
  }
  .upperWrapper__socials {
    position: relative;
    display: flex;
    z-index: 9;

    a {
      display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    }
    .bfacebook {
      fill: #fff;
    }
  }
  .upperWrapper__nav-desktop {
    width: 100%;
    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }
  .upperWrapper__logo {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 60px;
      margin: auto;
    }
    h1 {
      position: static;
      visibility: visible;
    }
  }
  .upperWrapper__burger {
    .burger {
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }
  }

  span.cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -100%;
    left: 0;
    background-color: ${({ path }) =>
      path === "/" || path === "/about" ? "#c1c9d0" : "#e5dede"};
    h1 {
      position: relative;
      visibility: visible;
      text-align: center;
      line-height: 65px;
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }
  }
`;
const TopBar = props => {
  return (
    <StyledUpperWrapper
      className={"upperWrapper"}
      path={props.path}
      isOpen={props.isOpen}
    >
      <span className={"cover"}>
        <Title>styled</Title>
      </span>
      <div className={"upperWrapper__socials"}>
        <SocialMenu socialMenu={props.socialMenu} isOpen={props.isOpen} />
      </div>
      <div className={"upperWrapper__burger"}>
        <Burger className={"burger"} />
      </div>
      <div className={"upperWrapper__nav-desktop"}>
        <NavDesktop className={"nav-desktop"} setLoader={props.setLoader} />
      </div>
    </StyledUpperWrapper>
  );
};

export default TopBar;
