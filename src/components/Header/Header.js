import React, { Component } from "react";
import styled from "styled-components";
// import HeroPhoto from "../../assets/images/hero-image.png";
import HeroPhotoMin from "../../assets/images/hero-image-min.png";
import Button from "../Button/Button";
import linesPattern from "../../assets/images/lines-pattern.svg";
import IconSVG from "../IconSVG/IconSVG";
import logoMain from "../../assets/images/logo-main.svg";
import Parallax from "react-rellax";
import { TimelineMax } from "gsap/TimelineMax";

const StyledWrapper = styled.header`
  position: relative;
  height: 88vh;
  width: 100vw;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -10;

  .cover-photo {
    will-change: transform, opacity;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${HeroPhotoMin});
    background-size: cover;
    background-position-x: 45%;
    /* transition: transform 0.65s ease-out; */
    @media only screen and (orientation: portrait) and (min-width: 375px) {
      background-position-x: 50%;
    }
  }
  ::after {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  /* DESKTOP */

  .lines {
    position: absolute;
    bottom: -2%;
    left: 0;
    margin: 0;
    opacity: 0;

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
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 70%;
  height: 70%;
  margin-top: 55px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-direction: column;

  .button {
    will-change: transform, opacity;
    visibility: hidden;
  }

  .logo-main {
    will-change: transform, opacity;
    visibility: hidden;
    width: 270px;
    transform: translate(-10%, 0);

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
    isVisible: false
  };

  componentDidMount() {
    const coverPhoto = document.querySelector(".cover-photo");
    const logo = document.querySelector(".logo-main");
    const button = document.querySelector(".button");

    const tlHomeMount = new TimelineMax({
      reversed: false
    });

    tlHomeMount
      .addPause()
      // .set(coverPhoto, { visibility: "visible" })
      .set(logo, { visibility: "visible" })
      .set(button, { visibility: "visible" })
      .from(coverPhoto, 0.7, {
        opacity: 0,
        scale: 1.2,
        transformOrigin: 0
      })
      .from(logo, 0.7, { opacity: 0, y: 50 }, "-=0.55")
      .from(button, 0.7, { opacity: 0, y: 50 }, "-=0.5")
      .set(coverPhoto, { clearProps: "all" });

    setTimeout(() => {
      tlHomeMount.play();
    }, 1800);

    this.setState({
      isVisible: true
    });
  }

  render() {
    return (
      <StyledWrapper>
        <Parallax className={"cover-photo"} speed={-1.8} />
        <Wrapper>
          <IconSVG className={"logo-main"} src={logoMain} />
          <div className="button">
            <Button content={"umów się na wizytę"} />
          </div>
        </Wrapper>
        <IconSVG className={"lines"} src={linesPattern} />
      </StyledWrapper>
    );
  }
}

export default Header;
