import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/Header/Header";
import Main from "./SectionMain/Main";
import About from "./SectionAbout/About";
import SectionMotto from "./SectionMotto/SectionMotto";
import Footer from "./Footer/Footer";
import IconSVG from "../components/IconSVG/IconSVG";
import Logo from "../assets/images/logo-main-white.svg";

const Loader = styled.div`
  position: fixed;
  transform: ${({ isLoaded }) =>
    isLoaded ? "translatey(-110%)" : "translatey(0)"};
  transition: transform 0.25s 3s linear;
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

const MainWrapper = styled.div`
  position: absolute;
  display: ${({ mainWrapper }) => (mainWrapper ? "block" : "none")};
  width: 100%;
  height: 100%;
  opacity: ${({ mainWrapper }) => (mainWrapper ? "1" : "0")};
  transform: ${({ mainWrapper }) => (mainWrapper ? "scale(1)" : "scale(1.2)")};
  transition: transform 0.35s 0.2s ease-out, opacity 0.35s 0.2s ease-out;
`;

class MainTemplate extends Component {
  state = {
    isLoaded: false,
    mainWrapper: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 500);
    setTimeout(() => {
      this.setState({
        mainWrapper: true
      });
    }, 3500);
  }

  render() {
    return (
      <>
        <Loader isLoaded={this.state.isLoaded}>
          <IconSVG className={"logo"} src={Logo} />
        </Loader>
        <MainWrapper
          isLoaded={this.state.isLoaded}
          mainWrapper={this.state.mainWrapper}
        >
          <GlobalStyles />
          <Header />
          <Main />
          <About />
          <SectionMotto />
          <Footer />
        </MainWrapper>
      </>
    );
  }
}

export default MainTemplate;
