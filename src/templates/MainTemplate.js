import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeTemplate from "./HomeTemplate/HomeTemplate";
import AboutTemplate from "./AboutTemplate/AboutTemplate";
// import IconSVG from "../components/IconSVG/IconSVG";
// import { Loader } from "../components/Loader/Loader";
// import Logo from "../assets/images/logo-main-white.svg";
import ContactTemplate from "./ContactTemplate/ContactTemplate";
import TemplateLoader from "../components/TemplateLoader/TemplateLoader";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Burger from "../components/Burger/Burger";
import SocialMenu from "../components/SocialMenu/SocialMenu";
import styled from "styled-components";
import { TimelineMax } from "gsap/TweenMax";
import { Power1 } from "gsap/EasePack";

const StyledUpperWrapper = styled.div`
  position: absolute;
  padding: 10px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 9;

  div:nth-child(1) {
    display: flex;
  }
`;

class MainTemplate extends Component {
  state = {
    isOpen: false,
    isScrollable: true,
    socialMenu: ""
  };

  handleSocialMenuFalse = () => {
    this.setState({
      socialMenu: false
    });
  };
  handleSocialMenuTrue = () => {
    this.setState({
      socialMenu: true
    });
  };

  componentDidMount() {
    const burger = document.querySelector(".burger");
    const li = document.querySelectorAll("li");
    const burgerMenu = document.querySelector(".burgerMenu");
    const burgerMenuLogo = document.querySelector(".burgerMenu .logo");
    const burgers = document.querySelectorAll(".burger div");
    const socialMenu = document.querySelector(".upperWrapper div");

    ////// Burger Menu Animation
    const tlBurger = new TimelineMax({
      reversed: true
    });

    tlBurger
      .addPause()
      .set(burgerMenu, { clearProps: "all" })
      .set(burgers, { clearProps: "all" })
      .set(burgerMenuLogo, { clearProps: "all" })
      .addLabel("start")
      .to(burgers[0], 0.15, { css: { transform: "translatey(0)" } })
      .to(burgers[2], 0.15, { css: { transform: "translatey(0)" } }, "start")
      .to(burgers[1], 0.1, { opacity: 0 })
      .addLabel("endTransform")
      .to(burgers[0], 0.15, { rotation: 45 })
      .to(burgers[2], 0.15, { rotation: -45 }, "endTransform")
      .addLabel("endTransformMenu")
      .to(burgerMenu, 0.25, { css: { transform: "translatex(0)" } }, "start")
      .to(socialMenu, 0.15, { opacity: 0 }, "start")
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

    tlTemplateLoader
      .addPause()
      .set(spans, {
        css: { animation: "wave-text 0.7s infinite alternate paused" }
      })
      .addLabel("start")
      .to(templateLoader, 0.45, {
        ease: Power1.easeInOut,
        css: { transform: "translateY(0)" }
      })
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

    //////Set Template

    const handleTemplateLoader = () => {
      tlTemplateLoader.play(false);
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
        if (e.target.className === "active") {
          handleBurger();
        } else {
          handleTemplateLoader();
          setTimeout(handleBurger, 100);
        }
      });
    });
  }

  render() {
    return (
      <>
        {/* <Loader>
          <IconSVG className={"logo"} src={Logo} />
        </Loader> */}
        <TemplateLoader className={"template-loader"} />
        <Router basename={process.env.PUBLIC_URL}>
          <BurgerMenu setLoader={this.setLoader} />
          <StyledUpperWrapper className={"upperWrapper"}>
            <div>
              <SocialMenu socialMenu={this.state.socialMenu} />
            </div>
            <div>
              <Burger />
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
                  // showAbout={this.state.showAbout}
                  // handleAboutMount={this.handleAboutMount}
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
                  // showAbout={this.state.showAbout}
                  // handleAboutMount={this.handleAboutMount}
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
