import React, { Component } from "react";
import styled from "styled-components";
import girlOne from "../../assets/images/girl-one-min.jpg";
import girlTwo from "../../assets/images/girl-two-min.jpg";
import girlThree from "../../assets/images/girl-three-min.jpg";
import blob from "../../assets/images/blob.svg";
import blob2 from "../../assets/images/blob2.svg";
import IconSVG from "../../components/IconSVG/IconSVG";
import dotted from "../../assets/images/dots.svg";
import dotted2 from "../../assets/images/dots2.svg";
import IconIMG from "../../components/IconIMG/IconIMG";
import casualOne from "../../assets/images/casual-girl-1.jpg";
import casualTwo from "../../assets/images/casual-girl-2.jpg";
import { Title } from "../../components/Title/Title";
import { Article } from "../../components/Article/Article";
import { TweenMax } from "gsap/TweenMax";
import { TimelineMax } from "gsap/TimelineMax";
import { Power3 } from "gsap/EasePack";
import Parallax from "react-rellax";
import HomeSectionTwo from "../../components/HomeSectionTwo/HomeSectionTwo";

const StyledMain = styled.main`
  position: relative;
  background-color: #c1c9d0;
  display: flex;
  flex-direction: column;

  .parallax-girls {
    will-change: transform;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82vw;
    margin-top: 60px;
    @media only screen and (orientation: landscape) {
      height: 60vw;
      margin: 60px 40px 0;
    }
    @media only screen and (min-width: 768px) {
      width: 55%;
      margin: 90px 0 0 20px;
      height: 60vw;
    }
    @media only screen and (min-width: 1024px) {
      height: 50vw;
    }
    @media only screen and (min-width: 1400px) {
      max-width: 760px;
      max-height: 700px;
      margin: 90px auto -156px;
      left: -251px;
    }

    h1.main {
      will-change: transform, opacity;
      visibility: hidden;
      text-align: center;
      top: 102px;
      font-size: 9vw;
      left: 27vw;
      @media only screen and (orientation: landscape) {
        top: 120px;
        font-size: 6vw;
      }
      @media only screen and (min-width: 768px) {
        font-size: 6vw;
        top: 0;
        left: 57vw;
      }
      @media only screen and (min-width: 1024px) {
        font-size: 5vw;
        left: 59vw;
      }
      @media only screen and (min-width: 1400px) {
        font-size: 64px;
        left: 790px;
      }
      ::before,
      ::after {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        display: block;
        content: "";
        background-color: #cd97c4;
        width: 110%;
        height: 3px;
      }
      ::after {
        top: 80%;
      }
    }

    div.blob {
      position: absolute;
      width: 85%;
      top: -20px;
      right: 3px;
      z-index: -3;
    }
    div.blob2 {
      position: absolute;
      width: 80%;
      top: 0;
      right: 2px;
      z-index: -3;
    }
    div.dotted {
      position: absolute;
      width: 35%;
      top: 54vw;
      left: 5%;
      z-index: -3;
      @media only screen and (orientation: landscape) {
        top: 44vw;
      }
      @media only screen and (min-width: 768px) {
        top: 29vw;
      }
      @media only screen and (min-width: 1280px) {
        top: 360px;
      }
    }
    div.dotted2 {
      position: absolute;
      width: 12%;
      top: -45px;
      right: 5%;
      z-index: -3;
    }

    .girl-one {
      will-change: transform, opacity;
      position: absolute;
      top: 30px;
      left: 15px;
      width: 37%;
      z-index: 3;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
      visibility: hidden;
    }
    .girl-two {
      will-change: transform, opacity;
      position: absolute;
      top: 90px;
      left: 50%;
      margin-left: -33%;
      width: 70%;
      z-index: 2;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
      visibility: hidden;
    }
    .girl-three {
      will-change: transform, opacity;
      visibility: hidden;
      position: absolute;
      top: 50px;
      right: 15px;
      width: 30%;
      z-index: 3;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    }
  }
`;

const StyledArticle = styled(Article)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto 60px;
  @media only screen and (min-width: 768px) {
    position: absolute;
    width: 38%;
    top: 32vw;
    left: 60vw;
  }
  @media only screen and (min-width: 1024px) {
    top: 25vw;
  }
  @media only screen and (min-width: 1400px) {
    position: relative;
    top: -290px;
    max-width: 400px;
    left: 347px;
    margin: 0 auto;
  }
  p {
    visibility: hidden;
    opacity: 1;
    will-change: transform, opacity;
  }
  span {
    visibility: hidden;
    will-change: transform;
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #fff;
  }

  span:nth-of-type(2) {
    transform: translateY(-250%);
  }
`;

const PicsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 70vw;
  width: 100%;
  max-height: 600px;
  @media only screen and (orientation: landscape) {
    height: 40vw;
  }
  @media only screen and (min-width: 768px) {
    height: 40vw;
  }
  @media only screen and (min-width: 1400px) {
    height: 37vw;
  }

  div {
    position: relative;
    width: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      position: absolute;
      will-change: transform;
      height: 100%;
      display: block;
    }
  }

  div:nth-child(1) {
    img {
      @media only screen and (min-width: 1400px) {
        right: 0;
      }
    }
  }
  div:nth-child(2) {
    img {
      @media only screen and (min-width: 1400px) {
        left: 0;
      }
    }
  }
`;

class Main extends Component {
  state = {};

  componentDidMount() {
    const girlOne = document.querySelector(".girl-one");
    const girlTwo = document.querySelector(".girl-two");
    const girlThree = document.querySelector(".girl-three");
    const h1Main = document.querySelector("h1.main");
    const casual = document.querySelectorAll(".casual");
    const picswrapper = document.querySelector(".picswrapper");
    const articleOne = document.querySelector(".articleone p");
    const articleTwo = document.querySelector(".articletwo p");
    const h1 = document.querySelector("h1.picswrapper");
    const spans = document.querySelectorAll(".articleone span");

    const tlGirls = new TimelineMax({ reversed: true });
    const tlArticleOne = new TimelineMax({ reversed: true });
    const tlArticleOne768 = new TimelineMax({ reversed: true });
    const tlArticleTwo = new TimelineMax({ reversed: true });

    const tweenCasual = TweenMax.from(casual, 0.7, {
      scale: 1.4,
      transformOrigin: "center center"
    });

    tlGirls
      .set(girlOne, { visibility: "visible" })
      .set(girlTwo, { visibility: "visible" })
      .set(girlThree, { visibility: "visible" })
      .set(h1Main, { visibility: "visible" })
      .addLabel("start")
      .from(girlOne, 1, { opacity: 0, x: -80 })
      .from(girlTwo, 1, { opacity: 0, y: 80 }, "start")
      .from(girlThree, 1, { opacity: 0, y: 80, delay: 0.15 }, "start")
      .from(
        h1Main,
        1,
        {
          opacity: 0,
          y: 150,
          delay: 0.25
        },
        "start"
      );

    tlArticleOne
      .addPause()
      .set(articleOne, { visibility: "visible" })
      .set(spans, { visibility: "visible", scaleX: 0 })
      .from(articleOne, 0.5, {
        ease: Power3.easeOut,
        opacity: 0,
        y: 100
      })
      .to(spans[0], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.55")
      .to(spans[0], 0.35, { scaleX: 1, transformOrigin: 0 })
      .to(spans[1], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.25")
      .to(spans[1], 0.35, { scaleX: 1, transformOrigin: 0 });

    tlArticleOne768
      .set(articleOne, { visibility: "visible" })
      .set(spans, { visibility: "visible", scaleX: 0 });

    tlArticleOne768
      .addLabel("start")
      .to(articleOne, 1, {
        ease: Power3.easeOut,
        opacity: 1,
        y: 0,
        delay: 0.55
      })
      .to(spans[1], 0.4, { scaleX: 1.1, transformOrigin: 0 }, "-=0.55")
      .to(spans[1], 0.25, { scaleX: 1, transformOrigin: 0 })
      .to(spans[0], 0.4, { scaleX: 1.1, transformOrigin: 0 }, "-=0.45")
      .to(spans[0], 0.25, { scaleX: 1, transformOrigin: 0 });

    tlArticleTwo
      .set(articleTwo, { visibility: "visible" })
      .set(h1, { visibility: "visible" })
      .from(h1, 1, {
        y: 100,
        ease: Power3.easeOut,
        opacity: 0
      })
      .from(
        articleTwo,
        1,
        {
          ease: Power3.easeOut,
          opacity: 0,
          y: 100
        },
        "-=0.75"
      );

    window.addEventListener("scroll", () => {
      let topGirlOne = girlOne.getBoundingClientRect().top + 10;
      let topPicsWrapper = picswrapper.getBoundingClientRect().top + 10;
      let topArticleOne = articleOne.getBoundingClientRect().top + 10;
      let topH1Article = h1.getBoundingClientRect().top + 10;

      topGirlOne <= window.innerHeight ? tlGirls.play() : tlGirls.reverse();
      topPicsWrapper <= window.innerHeight
        ? tweenCasual.play()
        : tweenCasual.reverse();

      if (window.innerWidth >= 768) {
        topArticleOne <= window.innerHeight
          ? tlArticleOne768.play()
          : tlArticleOne768.reverse();
      } else {
        topArticleOne <= window.innerHeight
          ? tlArticleOne.play()
          : tlArticleOne.reverse();
      }

      topH1Article <= window.innerHeight
        ? tlArticleTwo.play()
        : tlArticleTwo.reverse();
    });
  }

  render() {
    return (
      <StyledMain className={"home-template"}>
        <Parallax className={"parallax-girls"} speed={0.35} percentage={0.7}>
          <Title className={"main"}>
            prostowanie
            <br /> keratynowe
          </Title>
          <IconIMG
            src={girlOne}
            className={"girl-one"}
            alt={"dziewczyna z prostymi włosami"}
          />
          <IconIMG
            src={girlTwo}
            className={"girl-two"}
            alt={"dziewczyna z prostymi włosami"}
          />
          <IconIMG
            src={girlThree}
            className={"girl-three"}
            alt={"dziewczyna z prostymi włosami"}
          />
          <IconSVG className={"blob"} src={blob} />
          <IconSVG className={"blob2"} src={blob2} />
          <IconSVG className={"dotted"} src={dotted} />
          <IconSVG className={"dotted2"} src={dotted2} />
        </Parallax>
        <StyledArticle className={"articleone"}>
          <p>
            <strong>Amazon Keratin</strong> to zabieg keratynowy, którego celem
            jest odbudowa struktury włosów, ich intensywne odżywienie i
            wygładzenie. Polega na uzupełnieniu w strukturze włosa niedoboru
            keratyny, będącej naturalnym składnikiem budulcowym włosów.
          </p>
          <span />
          <span />
        </StyledArticle>
        <PicsWrapper className={"picswrapper"}>
          <div>
            <IconIMG
              className={"casual"}
              src={casualOne}
              alt={"Dziewczyna po prostowaniu włosów"}
            />
          </div>
          <div>
            <IconIMG
              className={"casual"}
              src={casualTwo}
              alt={"Dziewczyna po prostowaniu włosów"}
            />
          </div>
        </PicsWrapper>
        <HomeSectionTwo />
      </StyledMain>
    );
  }
}

export default Main;
