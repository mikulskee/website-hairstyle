import React, { Component } from "react";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Header from "../../components/Header/Header";
import Main from "../SectionMain/Main";
import SectionMotto from "../SectionMotto/SectionMotto";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

class HomeTemplate extends Component {
  state = {};
  render() {
    return (
      <MainWrapper
        isLoaded={this.props.isLoaded}
        isVisible={this.props.isVisible}
        className={"home-template"}
      >
        <GlobalStyles isScrollable={this.props.isScrollable} />
        <Header isLoaded={this.props.isLoaded} />
        <Main />
        <SectionMotto />
        <Footer />
      </MainWrapper>
    );
  }
}

export default HomeTemplate;
