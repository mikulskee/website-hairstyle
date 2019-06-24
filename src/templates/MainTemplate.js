import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomeTemplate from "./HomeTemplate/HomeTemplate";
import About from "./SectionAbout/About";
import IconSVG from "../components/IconSVG/IconSVG";
import Logo from "../assets/images/logo-main-white.svg";
import ContactTemplate from "./ContactTemplate/ContactTemplate";

const Loader = styled.div`
  position: fixed;
  transform: ${({ isLoaded }) =>
    isLoaded ? "translatey(-110%)" : "translatey(0)"};
  transition: transform 0.35s 3s linear;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;

  div.logo {
    width: 80vw;
    max-width: 300px;
    transform: ${({ isLoaded }) =>
      isLoaded ? "translatey(-10%)" : "translatey(0)"};
    opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
    transition: opacity 0.5s 1.8s ease-out, transform 0.5s 1.8s linear;
  }

  ::after {
    content: "";
    right: ${({ isLoaded }) => (isLoaded ? "20%" : "80%")};
    top: 50%;
    left: 20%;
    transition: right 1s 0.25s linear, opacity 0.3s 1.3s linear;
    opacity: ${({ isLoaded }) => (isLoaded ? "0" : "1")};
    position: fixed;
    height: 4px;
    background-color: #fff;
  }
`;

class MainTemplate extends Component {
  state = {
    isLoaded: false,
    isScrollable: false
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

  render() {
    return (
      <>
        <Loader isLoaded={this.state.isLoaded}>
          <IconSVG className={"logo"} src={Logo} />
        </Loader>
        <Router>
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
                <About {...props} isScrollable={this.state.isScrollable} />
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
      </>
    );
  }
}

export default MainTemplate;
