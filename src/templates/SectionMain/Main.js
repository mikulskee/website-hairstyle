import React, { Component } from "react";
import styled from "styled-components";
import girlOne from "../../assets/images/girl-one-min.png";
import girlTwo from "../../assets/images/girl-two-min.png";
import girlThree from "../../assets/images/girl-three-min.png";
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

let StyledMain = styled.main`
  position: relative;
  background-color: #c1c9d0;
  z-index: -3;

  @media only screen and (orientation: landscape) and (min-width: 667px) {
    padding-bottom: 40px;
  }
  @media only screen and (orientation: landscape) and (min-width: 812px) {
    height: 200vh;
  }

  .parallax-main {
    will-change: transform;
    display: flex;
    flex-direction: column;
    @media only screen and (orientation: landscape) and (min-width: 667px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    @media only screen and (orientation: landscape) and (min-width: 812px) {
      justify-content: space-between;
    }
  }

  .parallax-girls {
    will-change: transform;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    min-height: 300px;
    padding: 0 5px 0;
    margin-top: 60px;

    @media only screen and (orientation: landscape) and (min-width: 667px) {
      width: 55%;
      order: 2;
      margin-bottom: 50px;
    }

    h1.main {
      will-change: transform, opacity;
      visibility: hidden;
      text-align: center;
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        font-size: 34px;
      }
      @media only screen and (orientation: portrait) and (min-width: 375px) {
        font-size: 37px;
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
      bottom: 10%;
      left: 5%;
      z-index: -3;
      @media only screen and (orientation: landscape) {
        bottom: 0;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        bottom: 10%;
      }
    }
    div.dotted2 {
      position: absolute;
      width: 12%;
      top: -15%;
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
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        width: 30%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        top: 0;
        left: 0;
        width: 43%;
      }
      @media only screen and (orientation: landscape) and (min-width: 812px) {
        width: 39%;
      }
    }
    .girl-two {
      will-change: transform, opacity;
      position: absolute;
      width: 70%;
      z-index: 2;
      box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
      visibility: hidden;
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        width: 60%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        width: 70%;
        bottom: 25%;
        left: 20%;
      }
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
      @media only screen and (orientation: landscape) and (min-width: 568px) {
        width: 26%;
      }
      @media only screen and (orientation: landscape) and (min-width: 667px) {
        width: 33%;
        right: 0;
      }
      @media only screen and (orientation: landscape) and (min-width: 812px) {
        width: 29%;
        top: 37px;
      }
    }
  }
`;

const StyledArticle = styled(Article)`
  position: relative;
  margin-top: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    will-change: transform, opacity;
  }
  span {
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
  span:nth-child(2) {
    transform: translateY(-250%);
  }

  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 1;
    margin: 0 10px 70px 10px;
    align-items: flex-end;
  }
`;

const PicsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 40vh;
  width: 100%;

  @media only screen and (orientation: landscape) and (min-width: 480px) {
    height: 70vh;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    order: 3;
    width: 50%;
    align-self: center;
    margin-left: 10px;
  }
  div {
    position: relative;
    width: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      will-change: transform;
      height: 100%;
      display: block;
    }
  }
`;
const StyledArticle2 = styled(Article)`
  margin-top: 60px;
  position: relative;
  p {
    will-change: transform, opacity;
  }
  h1.picswrapper {
    will-change: transform, opacity;
    top: -85px;
    left: 0;
    visibility: hidden;
    margin: 0;
    @media only screen and (orientation: landscape) and (min-width: 667px) {
      font-size: 30px;
      top: -70px;
      left: -25px;
    }
    ::before {
      display: none;
    }
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    margin: 0 auto;
    width: 40%;
    order: 4;
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
      .set(articleOne, { visibility: "visible" })
      .set(spans, { scaleX: 0 })
      .from(articleOne, 0.5, {
        ease: Power3.easeOut,
        opacity: 0,
        y: 100
      })
      .to(spans[0], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.55")
      .to(spans[0], 0.35, { scaleX: 1, transformOrigin: 0 })
      .to(spans[1], 0.5, { scaleX: 1.1, transformOrigin: 0 }, "-=0.25")
      .to(spans[1], 0.35, { scaleX: 1, transformOrigin: 0 });

    tlArticleTwo
      .set(articleTwo, { visibility: "visible" })
      .set(h1, { clearProps: "all" })
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
      topArticleOne <= window.innerHeight
        ? tlArticleOne.play()
        : tlArticleOne.reverse();
      topH1Article <= window.innerHeight
        ? tlArticleTwo.play()
        : tlArticleTwo.reverse();
    });
  }

  render() {
    return (
      <StyledMain>
        <Parallax className={"parallax-main"} speed={1}>
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
              <strong>Amazon Keratin</strong> to zabieg keratynowy, którego
              celem jest odbudowa struktury włosów, ich intensywne odżywienie i
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

          <StyledArticle2 className={"articletwo"}>
            <Title className={"picswrapper"}>
              naturalność jest dla nas <span>priorytetem</span>
            </Title>
            <Parallax speed={-0.6} percentage={0.2}>
              <p>
                <strong>Preparaty keratynowe</strong>, używane podczas zabiegu,
                zawierają nie tylko keratynę, lecz także{" "}
                <strong>antyoksydanty, wyciągi z roślin i witaminy</strong> ,
                które trwale nawilżają włosy i dostarczają niezbędnych
                składników odżywczych oraz kwasy tłuszczowe, które tworzą na
                włosach niewidoczna barierę ochronna przed szkodliwymi
                czynnikami zewnętrznymi.
              </p>
            </Parallax>
          </StyledArticle2>
        </Parallax>
      </StyledMain>
    );
  }
}

export default Main;
