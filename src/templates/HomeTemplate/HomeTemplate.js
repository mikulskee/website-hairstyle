import React, { Component } from "react";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import Header from "../../components/Header/Header";
import Main from "../SectionMain/Main";
import SectionMotto from "../SectionMotto/SectionMotto";
import Footer from "../Footer/Footer";
import Visit from "../../components/Visit/Visit";
// import TimelineMax from "gsap/TimelineMax";

class HomeTemplate extends Component {
  state = {};

  componentDidMount() {
    this.props.handleSocialMenuTrue();
    this.props.findPath();
  }
  render() {
    return (
      <>
        <GlobalStyles isScrollable={this.props.isScrollable} />
        <Header
          showAbout={this.props.showAbout}
          handleAboutMount={this.props.handleAboutMount}
        />
        <Main />
        <SectionMotto />
        <Footer />
        <Visit />
      </>
    );
  }
}

export default HomeTemplate;
