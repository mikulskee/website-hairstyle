import React, { Component } from "react";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import Header from "../../components/Header/Header";
import Main from "../SectionMain/Main";
import SectionMotto from "../SectionMotto/SectionMotto";
import Footer from "../Footer/Footer";

class HomeTemplate extends Component {
  state = {};

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
      </>
    );
  }
}

export default HomeTemplate;
