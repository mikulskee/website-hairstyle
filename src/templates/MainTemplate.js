import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeTemplate from "./HomeTemplate/HomeTemplate";
import AboutTemplate from "./AboutTemplate/AboutTemplate";
import IconSVG from "../components/IconSVG/IconSVG";
import { Loader } from "../components/Loader/Loader";
import Logo from "../assets/images/logo-main-white.svg";
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
  margin-top: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
  }
`;

const RouterWrapper = styled.div`
  overflow: hidden;
  width: 100vw;
`;

class MainTemplate extends Component {
  state = { isOpen: false };

  componentDidMount() {
    ////// Burger Menu
    const burger = document.querySelector(".burger");
    const li = document.querySelectorAll("li");
    const burgerMenu = document.querySelector(".burgerMenu");
    const burgerMenuLogo = document.querySelector(".burgerMenu .logo");
    const burgers = document.querySelectorAll(".burger div");

    const tlBurger = new TimelineMax({
      reversed: true
    });

    tlBurger
      .addPause()
      .addLabel("start")
      .to(burgers[0], 0.15, { css: { transform: "translatey(0)" } })
      .to(burgers[2], 0.15, { css: { transform: "translatey(0)" } }, "start")
      .to(burgers[1], 0.1, { opacity: 0 })
      .addLabel("endTransform")
      .to(burgers[0], 0.15, { rotation: 45 })
      .to(burgers[2], 0.15, { rotation: -45 }, "endTransform")
      .addLabel("endTransformMenu")
      .to(burgerMenu, 0.25, { css: { transform: "translatex(0)" } }, "start")
      .to(
        burgerMenuLogo,
        0.15,
        { css: { transform: "translatey(0)", opacity: "1" } },
        "endTransformMenu"
      );

    const handleBurger = _ => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
      this.state.isOpen ? tlBurger.play() : tlBurger.reverse();
    };

    //////Burger Menu
    //
    //
    //
    //////Set Template
    const templateLoader = document.querySelector(".template-loader");
    const spans = document.querySelectorAll(".template-loader h2 span");
    const tlTemplateLoader = new TimelineMax();

    const handleTemplateLoader = () => {
      console.log("leci");
      tlTemplateLoader.play(false);
    };

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
      .set(spans, { css: { animation: "wave-text 0.7s infinite alternate" } })
      .to(templateLoader, 0.45, {
        delay: 1,
        ease: Power1.easeInOut,
        css: { transform: "translateY(-100%)" }
      })
      .set(spans, { clearProps: "all" })
      .set(templateLoader, { clearProps: "all" });

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
    burger.addEventListener("click", handleBurger);
    //////Set Template
  }

  render() {
    return (
      <>
        {/* <Loader>
          <IconSVG className={"logo"} src={Logo} />
        </Loader> */}
        <TemplateLoader className={"template-loader"} />

        <RouterWrapper>
          <Router basename={process.env.PUBLIC_URL}>
            <BurgerMenu setLoader={this.setLoader} />
            <StyledUpperWrapper className={"upperWrapper"}>
              <div>
                <SocialMenu />
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
                  // {...props}
                  // isScrollable={this.state.isScrollable}
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
                  // {...props}
                  // isScrollable={this.state.isScrollable}
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
                  // {...props}
                  // isScrollable={this.state.isScrollable}
                  />
                )}
              />
            </Switch>
          </Router>
        </RouterWrapper>
      </>
    );
  }
}

export default MainTemplate;
