import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeTemplate from "./HomeTemplate/HomeTemplate";
import AboutTemplate from "./AboutTemplate/AboutTemplate";
import ContactTemplate from "./ContactTemplate/ContactTemplate";
import TemplateLoader from "../components/TemplateLoader/TemplateLoader";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Burger from "../components/Burger/Burger";
import SocialMenu from "../components/SocialMenu/SocialMenu";
import NavDesktop from "../components/NavDesktop/NavDesktop";
import styled from "styled-components";
import { TimelineMax } from "gsap/TweenMax";
import { Power1 } from "gsap/EasePack";

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
    display: flex;
  }
  .upperWrapper__nav-desktop {
    width: 100%;
    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }

  div {
    .burger {
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }
  }

  span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -100%;

    left: 0;
    background-color: ${({ path }) =>
      path === "/" || path === "/about" ? "#c1c9d0" : "#e5dede"};
  }
`;

class MainTemplate extends Component {
  state = {
    isOpen: false,
    isScrollable: true,
    socialMenu: "",
    path: ""
  };

  findPath = () => {
    this.setState({
      path: window.location.pathname
    });
  };

  handleSocialMenuFalse = () => {
    this.setState({
      socialMenu: false
    });
  };
  handleSocialMenuTrue = () => {
    setTimeout(
      this.setState({
        socialMenu: true
      }),
      5000
    );
  };

  componentDidMount() {
    const burger = document.querySelector(".burger");
    const navDesktopLi = document.querySelectorAll(".upperWrapper li");
    const li = document.querySelectorAll(".burgerMenu li");
    const burgerMenu = document.querySelector(".burgerMenu");
    const burgerMenuLogo = document.querySelector(".burgerMenu .logo");
    const burgers = document.querySelectorAll(".burger div");
    const socialMenu = document.querySelector(".upperWrapper div");
    const upperWrapper = document.querySelector(".upperWrapper");
    const navSpan = document.querySelector(".upperWrapper span");

    ////// Burger Menu Animation
    const tlBurger = new TimelineMax({
      reversed: true
    });

    tlBurger
      .addPause()
      .set(burgerMenu, { clearProps: "all" })
      .set(burgers, { clearProps: "all" })
      .set(burgerMenuLogo, { clearProps: "all" })
      .set(navSpan, { clearProps: "all" })
      .addLabel("start")
      .to(burgers[0], 0.15, { css: { transform: "translatey(0)" } })
      .to(burgers[2], 0.15, { css: { transform: "translatey(0)" } }, "start")
      .to(burgers[1], 0.1, { opacity: 0 })
      .addLabel("endTransform")
      .to(burgers[0], 0.15, { rotation: 45 })
      .to(burgers[2], 0.15, { rotation: -45 }, "endTransform")
      .addLabel("endTransformMenu")
      .to(burgerMenu, 0.25, { css: { transform: "translatex(0)" } }, "start")
      .to(socialMenu, 0.15, { opacity: 0 })
      .to(
        burgerMenuLogo,
        0.15,
        { css: { transform: "translatey(0)", opacity: "1" } },
        "endTransformMenu"
      );

    //////Burger Menu Animation
    //
    //
    //
    //////Set Template Animation
    const templateLoader = document.querySelector(".template-loader");
    const spans = document.querySelectorAll(".template-loader h2 span");

    const tlTemplateLoader = new TimelineMax();
    const tlTemplateLoaderDesktop = new TimelineMax();

    tlTemplateLoader
      .addPause()
      .set(navSpan, { clearProps: "all" })
      .set(templateLoader, { visibility: "visible" })
      .set(spans, {
        css: { animation: "wave-text 0.7s infinite alternate paused" }
      })
      .addLabel("start")
      .to(
        templateLoader,
        0.45,
        {
          ease: Power1.easeInOut,
          css: { transform: "translateY(0)" }
        },
        "start"
      )
      .set(
        spans,
        { css: { animation: "wave-text 0.7s infinite alternate" } },
        "-=0.05"
      )
      .to(templateLoader, 0.45, {
        delay: 1,
        ease: Power1.easeInOut,
        css: { transform: "translateY(-100%)" }
      })

      .set(spans, { clearProps: "all" })
      .set(templateLoader, { clearProps: "all" });

    tlTemplateLoaderDesktop
      .addPause()
      .set(navSpan, { clearProps: "all" })
      .set(templateLoader, { visibility: "visible" })
      .set(spans, {
        css: { animation: "wave-text 0.7s infinite alternate paused" }
      })
      .addLabel("start")
      .to(upperWrapper, 0.05, { opacity: 0 })
      .to(
        templateLoader,
        0.7,
        {
          ease: Power1.easeInOut,
          css: { transform: "translateY(0)" }
        },
        "start"
      )
      .set(
        spans,
        { css: { animation: "wave-text 0.7s infinite alternate" } },
        "-=0.05"
      )
      .to(templateLoader, 0.7, {
        delay: 1,
        ease: Power1.easeInOut,
        css: { transform: "translateY(-100%)" }
      })
      .to(upperWrapper, 0.65, { opacity: 1 })
      .set(spans, { clearProps: "all" })
      .set(templateLoader, { clearProps: "all" });

    //////Set Template

    const handleTemplateLoader = () => {
      window.scrollTo(0, 0);
      tlTemplateLoader.play(false);
    };
    const handleTemplateLoaderDesktop = () => {
      window.scrollTo(0, 0);
      tlTemplateLoaderDesktop.play(false);
    };

    const handleBurger = _ => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        isScrollable: !prevState.isScrollable
      }));
      this.state.isOpen ? tlBurger.play() : tlBurger.reverse();
    };

    burger.addEventListener("click", handleBurger);

    li.forEach(li => {
      li.addEventListener("click", e => {
        if (e.target.classList.contains("active")) {
          window.scrollTo(0, 0);
          handleBurger();
        } else {
          handleTemplateLoader();
          setTimeout(handleBurger, 100);
        }
      });
    });

    navDesktopLi.forEach(li => {
      li.addEventListener("click", e => {
        console.log(e.target.classList.contains("active"));
        if (e.target.classList.contains("active")) {
          window.scrollTo(0, 0);
        } else {
          handleTemplateLoaderDesktop();
        }
      });
    });

    ///////////////////////////NavDesktopAnimation \/ ///////////////////////////////////

    // const navSpan = document.querySelector(".upperWrapper span");
    const tlNavDesktopHome = new TimelineMax({ reversed: true });

    tlNavDesktopHome.to(navSpan, 0.3, { y: 51 });

    const NavAnimaionHandler = () => {
      if (this.state.path === "/") {
        const sectionTwo = document.querySelector(".section-two");
        const parallax = document.querySelector(".parallax-girls");
        let topParallax = parallax.getBoundingClientRect().top - 90;
        let bottomParallax = parallax.getBoundingClientRect().bottom - 35;
        let topSectionTwo = sectionTwo.getBoundingClientRect().top - 50;
        let bottomSectionTwo = sectionTwo.getBoundingClientRect().bottom;

        if (topParallax < 0 && bottomParallax > 0) {
          tlNavDesktopHome.play();
        } else if (topSectionTwo < 0 && bottomSectionTwo > 0) {
          tlNavDesktopHome.play();
        } else {
          tlNavDesktopHome.reverse();
        }
      } else if (this.state.path === "/about") {
        const aboutMain = document.querySelector(".about-main");
        let aboutMainTop = aboutMain.getBoundingClientRect().top - 50;
        let aboutMainBottom = aboutMain.getBoundingClientRect().bottom;
        if (aboutMainTop < 0 && aboutMainBottom > 0) {
          tlNavDesktopHome.play();
        } else {
          tlNavDesktopHome.reverse();
        }
      } else if (this.state.path === "/contact") {
        const grapesHands = document.querySelector(".grapes-hands");
        let grapesHandsTop = grapesHands.getBoundingClientRect().top - 50;
        let grapesHandsBottom = grapesHands.getBoundingClientRect().bottom;
        if (grapesHandsTop < 0 && grapesHandsBottom > 0) {
          tlNavDesktopHome.reverse();
        } else {
          tlNavDesktopHome.play();
        }
      }
    };

    return window.addEventListener("scroll", NavAnimaionHandler);

    ///////////////////////////NavDesktopAnimation /\ ///////////////////////////////////
  }

  render() {
    return (
      <>
        <TemplateLoader className={"template-loader"} />
        <Router basename={process.env.PUBLIC_URL}>
          <BurgerMenu setLoader={this.setLoader} />
          <StyledUpperWrapper
            className={"upperWrapper"}
            path={this.state.path}
            isOpen={this.state.isOpen}
          >
            <span />
            <div className={"upperWrapper__socials"}>
              <SocialMenu socialMenu={this.state.socialMenu} />
            </div>
            <div className={"upperWrapper__burger"}>
              <Burger className={"burger"} />
            </div>
            <div className={"upperWrapper__nav-desktop"}>
              <NavDesktop
                className={"nav-desktop"}
                setLoader={this.setLoader}
              />
            </div>
          </StyledUpperWrapper>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <HomeTemplate
                  {...props}
                  isScrollable={this.state.isScrollable}
                  handleSocialMenuTrue={this.handleSocialMenuTrue}
                  findPath={this.findPath}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={props => (
                <AboutTemplate
                  {...props}
                  isScrollable={this.state.isScrollable}
                  handleSocialMenuFalse={this.handleSocialMenuFalse}
                  findPath={this.findPath}
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={props => (
                <ContactTemplate
                  {...props}
                  isScrollable={this.state.isScrollable}
                  handleSocialMenuFalse={this.handleSocialMenuFalse}
                  findPath={this.findPath}
                />
              )}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default MainTemplate;
