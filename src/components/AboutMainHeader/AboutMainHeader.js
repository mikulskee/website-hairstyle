import React from "react";
import styled from "styled-components";
import IconSVG from "../../components/IconSVG/IconSVG";
import marta from "../../assets/images/owner.png";
import marta2 from "../../assets/images/owner2.png";
import blob1 from "../../assets/images/blob.svg";
import blob3 from "../../assets/images/blob3.svg";
import dots from "../../assets/images/dots.svg";
import smallDots from "../../assets/images/dots2.svg";
import Parallax from "react-rellax";
import { Title } from "../../components/Title/Title";

const Wrapper = styled.div`
  position: relative;
  margin: 120px 0 0;
  width: 100vw;
  height: 75vw;
  @media only screen and (orientation: landscape) {
    padding: 45px 40px 0;
  }

  .about-main__parallax-title-img {
    will-change: transform;
    position: relative;
    width: 100%;
    height: 100%;

    .marta {
      will-change: transform, opacity;
      visibility: hidden;
      position: absolute;
      top: -69px;
      left: 0;
      width: 53%;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    }
    .marta2 {
      will-change: transform, opacity;
      visibility: hidden;
      position: absolute;
      top: -41px;
      right: 0;
      width: 53%;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    }
    .blob-orange {
      position: absolute;
      top: -29px;
      left: 10vw;
      transform: rotate(100deg);
      width: 72%;
      z-index: -1;
    }
    .blob-blue {
      position: absolute;
      top: -35px;
      left: -1vw;
      transform: rotate(118deg);
      width: 102%;
      z-index: -1;
    }
    .dots {
      position: absolute;
      top: 48vw;
      left: 5vw;
      width: 40%;
      z-index: -1;
    }
    .small-dots {
      position: absolute;
      top: -101px;
      left: 80vw;
      width: 14%;
      z-index: -1;
    }
  }
`;

const AboutMainTitle = styled(Title)`
  top: -105px;
  left: 36vw;
  @media only screen and (orientation: landscape) {
    top: -124px;
    left: 30vw;
  }
  .about-main-title__span {
    will-change: transform, opacity;
    visibility: hidden;
    font-size: 46px;
    display: block;
    @media only screen and (orientation: landscape) {
      font-size: 72px;
    }
  }
  .about-main-title__span-nd {
    will-change: transform, opacity;
    visibility: hidden;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (orientation: landscape) {
      font-size: 26px;
    }
    ::after {
      position: absolute;
      top: 55%;
      margin: 0 auto;
      z-index: -1;
      display: block;
      content: "";
      background-color: #cd97c4;
      width: 110%;
      height: 3px;
    }
  }
`;

const AboutMainHeader = () => {
  return (
    <Wrapper className={"about-main__header"}>
      <Parallax
        className={"about-main__parallax-title-img"}
        speed={0.3}
        percentage={1.8}
      >
        <AboutMainTitle className={"about-main-title"}>
          <span className={"about-main-title__span"}>Cześć,</span>
          <span className={"about-main-title__span-nd"}>
            {" "}
            Nazywam się Marta!{" "}
          </span>
        </AboutMainTitle>
        <img
          src={marta}
          className={"marta"}
          alt={"owner of the company with puppy"}
        />
        <img src={marta2} className={"marta2"} alt={"owner of the company"} />

        <IconSVG src={blob3} className={"blob-orange"} />
        <IconSVG src={blob1} className={"blob-blue"} />
        <IconSVG className={"dots"} src={dots} />
        <IconSVG className={"small-dots"} src={smallDots} />
      </Parallax>
    </Wrapper>
  );
};

export default AboutMainHeader;
