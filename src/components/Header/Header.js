import React, { Component } from "react";
import styled from "styled-components";
import HeroPhotoMin from "../../assets/images/hero-image-min.png";
import Button from "../Button/Button";
import logoImage from "../../assets/images/straightener.png";
import Parallax from "react-rellax";
import { TimelineMax } from "gsap/TimelineMax";

const StyledWrapper = styled.header`
  position: relative;
  height: 422px;
  width: 100vw;
  overflow: hidden;
  top: 0;
  left: 0;

  @media only screen and (min-width: 360px) {
    height: 563px;
  }
  @media only screen and (min-width: 375px) {
    height: 640px;
  }
  @media only screen and (min-width: 480px) and (orientation: landscape) {
    height: 100vh;
  }
  @media only screen and (min-width: 768px) and (orientation: portrait) {
    height: 100vh;
  }

  .cover-photo {
    will-change: transform, opacity;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${HeroPhotoMin});
    background-size: cover;
    background-position-x: 40%;
    @media only screen and (min-width: 360px) {
      background-position-x: 47%;
    }
    @media only screen and (orientation: portrait) and (min-width: 375px) {
      background-position-x: 50%;
    }
    @media only screen and (min-width: 768px) and (orientation: portrait) {
      background-position-x: 44%;
    }
  }
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 70%;
  height: 70%;
  margin: 60px 0 0 46px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-direction: column;
  @media only screen and (min-width: 360px) {
    margin: 60px 0 0 38px;
  }
  @media only screen and (min-width: 414px) {
    margin: 60px 0 0 24px;
  }
  @media only screen and (min-width: 480px) and (orientation: landscape) {
    width: 60%;
    margin: 60px 0 0 19px;
  }

  .button {
    will-change: transform, opacity;
    visibility: hidden;
    cursor: pointer;
    margin-top: 30px;
    button {
      margin-top: 0;
    }
  }

  .logo-main {
    will-change: transform, opacity;
    visibility: hidden;

    div {
      position: relative;
      h1 {
        font-family: "Lato", sans-serif;
        color: #000;
        text-transform: uppercase;
        text-align: center;
        font-size: 26px;
        @media only screen and (min-width: 768px) {
          font-size: 4vw;
        }

        @media only screen and (min-width: 1024px) {
          font-size: 46px;
        }
      }
      img {
        position: absolute;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translate(-250%, 10%);
      }
    }

    h3 {
      font-family: "Just Another Hand", serif;
      text-align: center;
      color: #de617a;
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 300;
      @media only screen and (min-width: 768px) {
        font-size: 3vw;
      }
      @media only screen and (min-width: 1024px) {
        font-size: 2.7vw;
      }
      @media only screen and (min-width: 1280px) {
        font-size: 32px;
      }
    }
  }
`;

class Header extends Component {
  state = {
    isVisitOpen: false
  };

  componentDidMount() {
    /////// About template mount \/ ////////
    const coverPhoto = document.querySelector(".cover-photo");
    const logo = document.querySelector(".logo-main");
    const button = document.querySelector(".button");
    const tlHomeMount = new TimelineMax({
      reversed: false
    });

    tlHomeMount
      .addPause()
      .set(coverPhoto, { visibility: "visible" })
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

    /////// About template mount /\ ////////
    const visit = document.querySelector(".visit");
    const visitButton = document.querySelector(".button");
    const phone = document.querySelectorAll(".phone");
    const mail = document.querySelector(".mail");
    const x = document.querySelector(".visit button");
    const title = document.querySelector(".visit h1");
    const filter = document.querySelector(".filter");

    const tlVisitOpen = new TimelineMax({
      reversed: false
    });
    const tlVisitClose = new TimelineMax({
      reversed: false
    });

    tlVisitOpen
      .addPause()
      .set(visit, { visibility: "visible" })
      .set(phone, { visibility: "visible" })
      .set(mail, { visibility: "visible" })
      .set(title, { visibility: "visible" })
      .set(filter, { visibility: "visible" })
      .from(filter, 0.4, { opacity: 0 })
      .from(visit, 0.4, { opacity: 0 }, "-=0.4")
      .from(title, 0.4, { opacity: 0 }, "-=0.4")
      .from(phone, 0.5, { opacity: 0, y: 60 })
      .from(mail, 0.5, { opacity: 0, y: 60 }, "-=0.4");

    tlVisitClose
      .addPause()
      .set(visit, { visibility: "visible" })
      .set(phone, { visibility: "visible" })
      .set(mail, { visibility: "visible" })
      .set(title, { visibility: "visible" })
      .set(filter, { visibility: "visible" })
      .to(visit, 0.5, { opacity: 0 })
      .to(filter, 0.5, { opacity: 0 }, "-=0.5")
      .set(filter, { clearProps: "all" })
      .set(phone, { clearProps: "all" })
      .set(title, { clearProps: "all" })
      .set(mail, { clearProps: "all" })
      .set(visit, { clearProps: "all" });

    visitButton.addEventListener("click", () => {
      tlVisitOpen.play(false);
      this.setState({
        isVisitOpen: true
      });
    });
    x.addEventListener("click", () => {
      tlVisitClose.play(false);
      this.setState({
        isVisitOpen: false
      });
    });
  }

  render() {
    return (
      <StyledWrapper className={"home-header"}>
        <Parallax className={"cover-photo"} speed={-1.8} />
        <Wrapper>
          <div className={"logo-main"}>
            <div>
              <img src={logoImage} alt="logo" />
              <h1>
                prostowanie
                <br />
                keratynowe
              </h1>
            </div>

            <h3>styled with style</h3>
          </div>
          <div className="button" onClick={this.handleButton}>
            <Button content={"umów się na wizytę"} />
          </div>
        </Wrapper>
      </StyledWrapper>
    );
  }
}

export default Header;
