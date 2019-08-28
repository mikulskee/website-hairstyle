import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import AboutHeader from "../../components/AboutHeader/AboutHeader";
import AboutMainHeader from "../../components/AboutMainHeader/AboutMainHeader";
import AboutArticleOne from "../../components/AboutArticleOne/AboutArticleOne";
import AboutCertificateWrap from "../../components/AboutCertificateWrap/AboutCertificateWrap";
import AboutArticleTwo from "../../components/AboutArticleTwo/AboutArticleTwo";
import Footer from "../../templates/Footer/Footer";

import { TimelineMax } from "gsap/TimelineMax";

const Section = styled.section`
  position: relative;
  background-color: #c1c9d0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.8s linear;
`;

const MainWrap = styled.main`
  position: relative;
`;

class AboutTemplate extends Component {
  state = {};

  componentDidMount() {
    this.props.handleSocialMenuFalse();
    this.props.findPath();

    const aboutTitle = document.querySelector(".about-header__title");
    const headerSpan = document.querySelector(".about-header__hero-image");
    const headerSpanCover = document.querySelector(
      ".about-header__cover-image"
    );
    const aboutTitleSpan = document.querySelector(".about-header__title__span");
    const sectionTitleSpans = document.querySelectorAll(
      ".about-main-title span"
    );
    const marta2 = document.querySelector(".marta2");
    const marta = document.querySelector(".marta");

    ///// About Mount Template \/
    const tlAboutMount = new TimelineMax({
      reversed: false
    });

    tlAboutMount
      .addPause()
      .set(headerSpan, { visibility: "visible" })
      .set(headerSpanCover, { visibility: "visible" })
      .set(aboutTitleSpan, { scaleX: 0 })
      .set(aboutTitle, { visibility: "visible" })
      .addLabel("start")
      .from(headerSpan, 0.7, { opacity: 0, scale: 1.2, transformOrigin: 0 })
      .from(headerSpanCover, 0.7, { opacity: 0 }, "start")
      .from(aboutTitle, 0.7, { opacity: 0, y: -100 }, "-=0.45")
      .to(aboutTitleSpan, 0.5, { scaleX: 1.1, transformOrigin: 0 })
      .to(aboutTitleSpan, 0.35, { scaleX: 1, transformOrigin: 0 });

    ///// About Mount Template /\

    //// Section Title Animtion \/
    const tlSectionTitle = new TimelineMax({
      reversed: false
    });

    tlSectionTitle
      .set(sectionTitleSpans, { visibility: "visible" })
      .set(marta, { visibility: "visible" })
      .set(marta2, { visibility: "visible" })
      .addLabel("start")
      .from(sectionTitleSpans[0], 0.7, { opacity: 0, y: 100 })
      .from(sectionTitleSpans[1], 0.7, { opacity: 0, y: 100 }, "-=0.57")
      .from(marta, 0.7, { opacity: 0, y: 60 }, "start")
      .from(marta2, 0.7, { opacity: 0, x: 40 }, "start");

    //// Section Title Animation /\ ///
    //
    //
    //
    //
    //// Artcile One Animation \/ ////
    const articleTwo = document.querySelector(".about__article-two p");
    const spansTwo = document.querySelectorAll(".about__article-two span");
    const firstSpansTwo = document.querySelector(".about__article-two span");
    const articleOne = document.querySelector(".about__article-one p");
    const spans = document.querySelectorAll(".about__article-one span");

    const tlArticleOne = new TimelineMax({ reversed: true });
    const tlArticleTwo = new TimelineMax({ reversed: true });

    tlArticleOne
      .set(articleOne, { visibility: "visible" })
      .set(spans, { visibility: "visible", scaleX: 0 })
      .from(articleOne, 0.5, {
        opacity: 0,
        y: 100
      })
      .to(spans[0], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.55")
      .to(spans[0], 0.35, { scaleX: 1, transformOrigin: 0 })
      .to(spans[1], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.25")
      .to(spans[1], 0.35, { scaleX: 1, transformOrigin: 0 });

    tlArticleTwo
      .set(articleTwo, { visibility: "visible" })
      .set(spansTwo, { visibility: "visible", scaleX: 0 })
      .to(spansTwo[1], 0.5, { scaleX: 1.1, transformOrigin: 0 })
      .to(spansTwo[1], 0.35, { scaleX: 1, transformOrigin: 0 })
      .to(spansTwo[0], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.55")
      .to(spansTwo[0], 0.35, { scaleX: 1, transformOrigin: 0 })
      .from(
        articleTwo,
        0.7,
        {
          opacity: 0,
          y: 100
        },
        "-=1"
      );

    //// Article One Animation /\ ////
    window.addEventListener("scroll", () => {
      let marta2Top = marta2.getBoundingClientRect().top + 10;
      let topArticleTwo = firstSpansTwo.getBoundingClientRect().top + 10;
      let topArticleOne = articleOne.getBoundingClientRect().top;

      marta2Top <= window.innerHeight
        ? tlSectionTitle.play()
        : tlSectionTitle.reverse();

      topArticleOne <= window.innerHeight
        ? tlArticleOne.play()
        : tlArticleOne.reverse();

      topArticleTwo <= window.innerHeight
        ? tlArticleTwo.play()
        : tlArticleTwo.reverse();
    });

    setTimeout(() => {
      tlAboutMount.play();
    }, 1800);
  }
  render() {
    return (
      <>
        <Section className={"about-template"}>
          <GlobalStyles isScrollable={this.props.isScrollable} />
          <AboutHeader />
          <MainWrap className={"about-main"}>
            <AboutMainHeader />
            <AboutArticleOne />
            <AboutCertificateWrap />
            <AboutArticleTwo />
          </MainWrap>
        </Section>
        <Footer />
      </>
    );
  }
}

export default AboutTemplate;
