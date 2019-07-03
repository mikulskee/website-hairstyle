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
  state = {
    isLoaded: false,
    isScrollable: false,
    isOpen: false,
    id: 0
  };

  handleButton = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      id: prevState.id + 1,
      isScrollable: !prevState.isScrollable
    }));
  };

  hideBurgerMenu = () => {
    window.scrollTo(0, 0);
    const loader = document.querySelector(".template-loader div");
    loader.classList.add("active");
    this.setState({
      isScrollable: false
    });

    setTimeout(() => {
      loader.classList.remove("active");
      this.setState({
        isScrollable: true
      });
    }, 4100);

    setTimeout(() => {
      this.setState({
        isOpen: false
      });
    }, 1500);
  };

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
      this.setState({
        isLoaded: true
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        isScrollable: true
      });
    }, 3600);
  }

  componentWillUnmount() {
    this.setState({
      isLoaded: false
    });
  }

  render() {
    return (
      <>
        <Loader isLoaded={this.state.isLoaded}>
          <IconSVG className={"logo"} src={Logo} />
        </Loader>
        <TemplateLoader className={"template-loader"} />

        <RouterWrapper>
          <Router basename={process.env.PUBLIC_URL}>
            <BurgerMenu
              isOpen={this.state.isOpen}
              hideBurgerMenu={this.hideBurgerMenu}
            />
            <StyledUpperWrapper className={"upperWrapper"}>
              <div>
                <SocialMenu />
              </div>
              <div>
                <Burger
                  handleButton={this.handleButton}
                  isOpen={this.state.isOpen}
                  id={this.state.id}
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
                    isLoaded={this.state.isLoaded}
                    isScrollable={this.state.isScrollable}
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
                    isLoaded={this.state.isLoaded}
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
