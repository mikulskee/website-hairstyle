import React, { Component } from "react";
import styled from "styled-components";
import HeroPhoto from "../../assets/images/hero-image.png";
import Button from "../Button/Button";
import linesPattern from "../../assets/images/lines-pattern.svg";
import IconSVG from "../IconSVG/IconSVG";
import logoMain from "../../assets/images/logo-main.svg";

const StyledWrapper = styled.header`
  position: relative;
  height: 100vh;
  overflow: hidden;
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: -2;
  }

  /* DESKTOP */

  .lines {
    position: absolute;
    bottom: -2%;
    left: 0;
    margin: 0;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
    will-change: opacity;

    @media only screen and (min-width: 640px) and (orientation: landscape) {
      opacity: 1;
    }

    svg {
      width: 180px;

      @media only screen and (min-width: 730px) and (orientation: landscape) {
        width: 220px;
      }
      @media only screen and (min-width: 1024px) and (orientation: landscape) {
        width: 400px;
      }
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  height: 70%;
  margin-top: 55px;
  align-items: center;
  justify-content: center;
  z-index: 1;
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
      will-change: opacity;

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

const StyledBackground = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -10;
  background-image: url(${HeroPhoto});
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  transform: ${({ isLoaded }) =>
    isLoaded ? " translatex(0) scale(1)" : "translatex(-10%) scale(1.3)"};
  opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
  transition: transform 0.45s 3.25s ease-out, opacity 0.35s 3.25s ease-out;

  @media only screen and (min-width: 768px) and (orientation: portrait) {
    background-position: 45% 0;
  }
  @media only screen and (min-width: 375px) and (min-height: 812px) and (orientation: portrait) {
    background-position: 53% 0;
  }
  @media only screen and (min-width: 1024px) and (min-height: 769px) and (orientation: landscape) {
    background-position: 65% 0;
  }
`;

class Header extends Component {
  state = {};

  render() {
    return (
      <StyledWrapper isOpen={this.props.isOpen}>
        <StyledBackground isLoaded={this.props.isLoaded} />
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
