import React from "react";
import styled from "styled-components";
import logoSmall from "../../assets/images/Logo-white-small.png";
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

  .upperWrapper__burger {
    .burger {
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }
  }

  span.cover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -150%;
    left: 0;

    background-color: ${({ path }) =>
      !window.location.href.includes("/contact") ? "#c1c9d0" : "#e5dede"};
    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 46%;
      height: 100%;
      box-shadow: 0px 31px 13px -29px rgb(142, 142, 142);
    }
    img {
      position: relative;
      height: 50px;
      z-index: 1;
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }
  }
`;
const TopBar = props => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <StyledUpperWrapper
      className={"upperWrapper"}
      path={props.path}
      isOpen={props.isOpen}
    >
      <span className={"cover"} isOpen={props}>
        <img src={logoSmall} alt="straightener" onClick={handleLogoClick} />
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
