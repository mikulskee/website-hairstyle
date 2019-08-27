import React from "react";
import styled from "styled-components";
import heroImageAbout from "../../assets/images/heroimage-about-min.png";
import { Title } from "../../components/Title/Title";
import Parallax from "react-rellax";

const Wrapper = styled.header`
  position: relative;
  height: 408px;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
  @media only screen and (min-width: 320px) and (min-height: 568px) {
    height: 490px;
  }
  @media only screen and (min-width: 360px) {
    height: 544px;
  }
  @media only screen and (min-width: 375px) {
    height: 612px;
  }
  @media only screen and (min-height: 812px) {
    height: 685px;
  }
  @media only screen and (min-width: 768px) and (orientation: portrait) {
    height: 100vh;
  }
  @media only screen and (orientation: landscape) {
    height: 100vh;
  }

  .about-header__parallax {
    width: 100%;
    height: 100%;
    will-change: transform;
  }

  .about-header__hero-image {
    will-change: transform, opacity;
    display: block;
    visibility: hidden;
    width: 100%;
    height: 100%;
    background-image: url(${heroImageAbout});
    background-size: cover;
    background-position: 58% 50%;
    background-repeat: no-repeat;
    @media only screen and (orientation: landscape) and (min-width: 460px) {
      background-position: 58% 30%;
    }
  }
  .about-header__cover-image {
    will-change: opacity;
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const AboutTitle = styled(Title)`
  will-change: transform, opacity;
  margin: 0;
  top: 33%;
  left: 40%;
  visibility: hidden;
  line-height: 1;
  @media only screen and (orientation: landscape) and (min-width: 460px) {
    font-size: 37px;
  }
  @media only screen and (orientation: portrait) and (min-width: 375px) {
    font-size: 37px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 6vw;
    top: 40%;
    left: 52vw;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 62px;
  }

  .about-header__title__span {
    will-change: transform;
    position: absolute;
    top: 55%;
    right: 0;
    z-index: -1;
    display: block;
    background-color: #cd97c4;
    transform: scaleX(0);
    width: 150%;
    height: 3px;
  }
`;

const AboutHeader = () => {
  return (
    <Wrapper className={"about-header"}>
      <Parallax className={"about-header__parallax"} speed={-1.8}>
        <span className={"about-header__hero-image"} />
        <span className={"about-header__cover-image"} />
      </Parallax>
      <AboutTitle className={"about-header__title"}>
        kim jestem? <span className={"about-header__title__span"} />
      </AboutTitle>
    </Wrapper>
  );
};

export default AboutHeader;
