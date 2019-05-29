import React, { Component } from "react";
import styled from "styled-components";
import HeroPhotoMobile from "../../assets/images/hero-image-mobile.png";
import HeroPhoto from "../../assets/images/hero-image.png";
import Burger from "../Burger/Burger";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SocialMenu from "../SocialMenu/SocialMenu";
import Button from "../Button/Button";
import linesPattern from "../../assets/images/lines-pattern.svg";
import IconSVG from "../IconSVG/IconSVG";
import logoMain from "../../assets/images/logo-main.svg";

const StyledWrapper = styled.header`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${HeroPhotoMobile});
  background-repeat: no-repeat;
  background-position: 50% 0%;
  overflow: hidden;
  transition: transform 0.15s linear;
  background-size: cover;

  @media only screen and (min-width: 768px) and (orientation: portrait) {
    background-position: 45% 0;
  }
  @media only screen and (min-width: 375px) and (min-height: 812px) and (orientation: portrait) {
    background-position: 53% 0;
  }
  @media only screen and (min-width: 1024px) and (min-height: 800px) {
    background-image: url(${HeroPhoto});
  }

  .lines {
    position: absolute;
    bottom: -2%;
    left: 0;
    margin: 0;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;

    @media only screen and (min-width: 640px) and (orientation: landscape) {
      opacity: 1;
    }

    svg {
      width: 180px;
      transition: width 0.15s ease-in-out;

      @media only screen and (min-width: 730px) and (orientation: landscape) {
        width: 220px;
      }
      @media only screen and (min-width: 1024px) and (orientation: landscape) {
        width: 400px;
      }
    }
  }
`;

const StyledUpperWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  height: 70%;
  transform: translate(0);
  align-items: center;
  justify-content: center;
  z-index: 3;
  flex-direction: column;

  svg {
    width: 270px;
    transform: translateX(-10%);

    .e,
    .f,
    .g,
    .h,
    .i,
    .j,
    .k,
    .l,
    .m,
    .n,
    .o {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;

      @media only screen and (min-width: 568px) and (orientation: landscape) {
        opacity: 1;
      }
      @media only screen and (min-width: 768px) {
        opacity: 1;
      }
    }

    @media only screen and (min-width: 375px) and (min-height: 812px) and (orientation: portrait) {
      width: 310px;
    }
    @media only screen and (min-width: 731px) {
      width: 300px;
    }
    @media only screen and (min-width: 736px) and (orientation: portrait) {
      width: 410px;
    }
    @media only screen and (min-width: 1024px) {
      width: 520px;
    }
    @media only screen and (min-width: 1024px) and (orientation: portrait) {
      width: 570px;
    }
  }

  @media only screen and (min-width: 480px) and (orientation: landscape) {
    width: 60%;
  }
  @media only screen and (min-width: 736px) {
    margin-left: 30px;
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
  }

  @media only screen and (min-width: 375px) and (min-height: 812px) and (orientation: portrait) {
    transform: translate(-5%, -5%);
  }

  @media only screen and (min-width: 1024px) {
    transform: translate(-5%, 0);
  }
`;

class Header extends Component {
  state = {
    isOpen: false,
    id: 0
  };

  render() {
    const handleButton = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        id: prevState.id + 1
      }));
    };

    return (
      <StyledWrapper isOpen={this.state.isOpen}>
        <BurgerMenu isOpen={this.state.isOpen} />
        <StyledUpperWrapper>
          <div>
            <SocialMenu />
          </div>
          <div>
            <Burger
              handleButton={handleButton}
              isOpen={this.state.isOpen}
              id={this.state.id}
            />
          </div>
        </StyledUpperWrapper>
        <Wrapper>
          <IconSVG className={"logo"} src={logoMain} />
          <Button content={"umów się na wizytę"} />
        </Wrapper>
        <IconSVG className={"lines"} src={linesPattern} />
      </StyledWrapper>
    );
  }
}

export default Header;
