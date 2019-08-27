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
  max-width: 700px;
  max-height: 420px;
  @media only screen and (orientation: landscape) {
    padding: 45px 40px 0;
  }
  @media only screen and (min-width: 768px) {
    margin: 15vw 0 0 6vw;
    width: 50vw;
    height: 20vw;
    padding: 0;
  }
  @media only screen and (min-width: 1024px) {
    height: 25vw;
  }
  @media only screen and (min-width: 1024px) {
    height: 30vw;
  }
  @media only screen and (min-width: 1400px) {
    margin: 190px auto 0;
    left: -306px;
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
      max-width: 370px;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
      @media only screen and (min-width: 768px) {
        top: -9vw;
      }
      @media only screen and (min-width: 1400px) {
        top: -120px;
      }
    }

    .marta2 {
      will-change: transform, opacity;
      visibility: hidden;
      position: absolute;
      top: -41px;
      right: 0;
      width: 53%;
      max-width: 370px;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
      @media only screen and (min-width: 768px) {
        top: -5vw;
      }
      @media only screen and (min-width: 1400px) {
        top: -65px;
      }
    }
    .blob-orange {
      position: absolute;
      top: -29px;
      left: 10vw;
      transform: rotate(100deg);
      width: 72%;
      max-width: 504px;
      z-index: -1;
      @media only screen and (min-width: 1400px) {
        left: 140px;
      }
    }
    .blob-blue {
      position: absolute;
      top: -35px;
      left: -1vw;
      transform: rotate(118deg);
      width: 102%;
      max-width: 714px;
      z-index: -1;
      @media only screen and (min-width: 1400px) {
        left: -14px;
      }
    }
    .dots {
      position: absolute;
      top: 48vw;
      left: 5vw;
      width: 40%;
      z-index: -1;
      max-width: 280px;
      @media only screen and (min-width: 768px) {
        top: 200px;
      }
      @media only screen and (min-width: 1024px) {
        top: 246px;
      }
      @media only screen and (min-width: 1280px) {
        top: 312px;
      }
      @media only screen and (min-width: 1400px) {
        left: 70pxpx;
      }
    }
    .small-dots {
      position: absolute;
      top: -101px;
      left: 80vw;
      width: 14%;
      z-index: -1;
      max-width: 280px;
      @media only screen and (min-width: 1280px) {
        top: -156px;
      }
      @media only screen and (min-width: 1400px) {
        left: 1120px;
      }
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
  @media only screen and (min-width: 768px) {
    top: -14vw;
    left: 56vw;
    width: 60%;
  }
  @media only screen and (min-width: 1024px) {
    top: -11vw;
  }
  @media only screen and (min-width: 1400px) {
    top: -154px;
    left: 784px;
    width: 420px;
  }
  .about-main-title__span {
    will-change: transform, opacity;
    visibility: hidden;
    font-size: 46px;
    display: block;
    @media only screen and (orientation: landscape) {
      font-size: 72px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 7vw;
    }
    @media only screen and (min-width: 1400px) {
      font-size: 98px;
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
    @media only screen and (min-width: 768px) {
      font-size: 3.3vw;
    }
    @media only screen and (min-width: 1400px) {
      font-size: 46px;
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
