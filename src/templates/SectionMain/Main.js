import React, { Component } from "react";
import styled from "styled-components";
import girlOne from "../../assets/images/girl-one.svg";
import girlTwo from "../../assets/images/girl-two.svg";
import girlThree from "../../assets/images/girl-three.svg";
import blob from "../../assets/images/blob.svg";
import blob2 from "../../assets/images/blob2.svg";
import IconSVG from "../../components/IconSVG/IconSVG";
import dotted from "../../assets/images/dotted-pattern.svg";
import IconIMG from "../../components/IconIMG/IconIMG";
import casualOne from "../../assets/images/casual-girl-1.jpg";
import casualTwo from "../../assets/images/casual-girl-2.jpg";
import { Title } from "../../components/Title/Title";
import { Article } from "../../components/Article/Article";

const StyledMain = styled.main`
  position: relative;
  background-color: #c1c9d0;
  overflow: hidden;
  z-index: -3;
  display: flex;
  flex-direction: column;
  border-bottom: 10px dotted white;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 40px;
  }
`;
const StyledTitle = styled(Title)`
  transform: ${({ isVisible }) =>
    isVisible ? "translatey(0)" : "translatey(35%)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: transform 0.35s ease-out, opacity 0.6s ease-out;
  will-change: transform, opacity;
`;
const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  min-height: 380px;
  padding: 150px 5px 0;

  h1 {
  }
  @media only screen and (orientation: landscape) {
    min-height: 400px;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 55%;
    order: 2;
  }
  @media only screen and (orientation: portrait) and (min-height: 700px) {
    min-height: 440px;
  }

  div.blob {
    position: absolute;
    width: 85%;
    top: 127px;
    right: 3px;
    z-index: -3;
  }
  div.blob2 {
    position: absolute;
    width: 80%;
    top: 130px;
    right: 2px;
    z-index: -4;
  }
  div.dotted {
    position: absolute;
    width: 30%;
    bottom: -10%;
    left: 5%;
    z-index: -3;
  }
`;

const GirlOne = styled(IconSVG)`
  position: absolute;
  z-index: 2;
  width: 40%;
  max-width: 160px;

  transform: ${({ isVisible }) =>
    isVisible ? "translate(-70%, -20%)" : "translate(-140%, -20%)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: transform 0.65s ease-out, opacity 0.65s linear;
  will-change: transform, opacity;

  @media only screen and (orientation: landscape) {
    transform: ${({ isVisible }) =>
      isVisible ? "translate(-100%, -10%)" : "translate(-170%, -10%)"};
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    transform: ${({ isVisible }) =>
      isVisible ? "translate(-60%, -50%)" : "translate(-130%, -50%)"};
  }
`;

const GirlTwo = styled(IconSVG)`
  position: absolute;
  z-index: 1;
  width: 60%;
  transform: ${({ isVisible }) =>
    isVisible ? "translate(0, 30%)" : "translate(0, 60%)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: transform 0.65s 0.25s ease-out, opacity 0.65s 0.25s linear;
  will-change: transform, opacity;
  max-width: 300px;
`;

const GirlThree = styled(IconSVG)`
  position: absolute;
  width: 32%;
  z-index: 2;
  transform: ${({ isVisible }) =>
    isVisible ? "translate(100%, 20%)" : "translate(100%, 0)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: transform 0.65s 0.15s ease-out, opacity 0.65s 0.15s linear;
  will-change: transform, opacity;
  max-width: 130px;
  @media only screen and (orientation: landscape) {
    transform: ${({ isVisible }) =>
      isVisible ? "translate(130%, 10%)" : "translate(150%, 10%)"};
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    transform: ${({ isVisible }) =>
      isVisible ? "translate(110%, 15%)" : "translate(140%, 15%)"};
  }
`;

const StyledArticle = styled(Article)`
  border-bottom: 10px double white;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 1;
    margin: 140px 0 30px 20px;
  }
`;

const PicsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  width: 100%;
  overflow: hidden;

  @media only screen and (orientation: landscape) {
    order: 3;
    height: 50vh;
    width: 50%;
    align-self: center;
    margin-left: 10px;
  }

  div {
    height: 100%;
    width: 50%;
    position: relative;
    overflow: hidden;
    transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(1.5)")};
    transition: transform 0.5s 0.15s linear;

    img {
      max-height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-25%);
    }
  }
`;
const StyledArticle2 = styled(Article)`
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 4;
  }
`;

class Main extends Component {
  state = {
    rendered: false,
    titleIsVisible: false,
    girlOneIsVisible: false,
    girlTwoIsVisible: false,
    girlThreeIsVisible: false,
    picsWrapperisVisible: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleShowTitle);
    window.addEventListener("scroll", this.handleShowGirlOne);
    window.addEventListener("scroll", this.handleShowGirlTwo);
    window.addEventListener("scroll", this.handleShowGirlThree);
    window.addEventListener("scroll", this.handleShowPics);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleShowTitle);
    window.removeEventListener("scroll", this.handleShowGirlOne);
    window.removeEventListener("scroll", this.handleShowGirlTwo);
    window.removeEventListener("scroll", this.handleShowGirlThree);
    window.removeEventListener("scroll", this.handleShowPics);
  }
  handleShowTitle = () => {
    const h1main = document.querySelector("h1.main");
    let topH1 = h1main.getBoundingClientRect().top;
    let heightH1 = h1main.getBoundingClientRect().height;
    let middleH1 = topH1 + heightH1 / 2;
    if (middleH1 <= window.innerHeight) {
      this.setState({
        titleIsVisible: true
      });
    } else {
      this.setState({
        titleIsVisible: false
      });
    }

    console.log("aaaa");
  };

  handleShowGirlOne = () => {
    const girlOne = document.querySelector(".girlone");

    let topGirlOne = girlOne.getBoundingClientRect().top + 10;
    if (topGirlOne <= window.innerHeight) {
      this.setState({
        girlOneIsVisible: true
      });
    } else {
      this.setState({
        girlOneIsVisible: false
      });
    }
  };

  handleShowGirlTwo = () => {
    const girlTwo = document.querySelector(".girltwo");
    let topGirlTwo = girlTwo.getBoundingClientRect().top + 10;
    if (topGirlTwo <= window.innerHeight) {
      this.setState({
        girlTwoIsVisible: true
      });
    } else {
      this.setState({
        girlTwoIsVisible: false
      });
    }
  };

  handleShowGirlThree = () => {
    const girlThree = document.querySelector(".girlthree");
    let topGirlThree = girlThree.getBoundingClientRect().top + 10;
    if (topGirlThree <= window.innerHeight) {
      this.setState({
        girlThreeIsVisible: true
      });
    } else {
      this.setState({
        girlThreeIsVisible: false
      });
    }
  };

  handleShowPics = () => {
    const picsWrapper = document.querySelector(".picswrapper");
    let topPicsWrapper = picsWrapper.getBoundingClientRect().top + 10;
    if (topPicsWrapper <= window.innerHeight) {
      this.setState({
        picsWrapperisVisible: true
      });
    } else {
      this.setState({
        picsWrapperisVisible: false
      });
    }
  };

  render() {
    return (
      <StyledMain>
        <StyledTitle className={"main"} isVisible={this.state.titleIsVisible}>
          prostowanie <br /> keratynowe
        </StyledTitle>
        <StyledWrapper>
          <GirlOne
            className={"girlone"}
            src={girlOne}
            isVisible={this.state.girlOneIsVisible}
          />
          <GirlTwo
            className={"girltwo"}
            src={girlTwo}
            isVisible={this.state.girlTwoIsVisible}
          />
          <GirlThree
            className={"girlthree"}
            src={girlThree}
            isVisible={this.state.girlThreeIsVisible}
          />
          <IconSVG className={"blob"} src={blob} />
          <IconSVG className={"blob2"} src={blob2} />
          <IconSVG className={"dotted"} src={dotted} />
        </StyledWrapper>
        <StyledArticle
          className={"articleone"}
          scrollRatio={this.state.scrollRatio}
        >
          <p>
            <strong>Amazon Keratin</strong> to zabieg keratynowy, którego celem
            jest odbudowa struktury włosów, ich intensywne odżywienie i
            wygładzenie. Polega na uzupełnieniu w strukturze włosa niedoboru
            keratyny, będącej naturalnym składnikiem budulcowym włosów.
          </p>
        </StyledArticle>
        <PicsWrapper
          className={"picswrapper"}
          isVisible={this.state.picsWrapperisVisible}
        >
          <IconIMG
            className={"casualone"}
            src={casualOne}
            alt={"Dziewczyna po prostowaniu włosów"}
          />
          <IconIMG
            className={"casualtwo"}
            src={casualTwo}
            alt={"Dziewczyna po prostowaniu włosów"}
          />
        </PicsWrapper>
        <StyledArticle2
          className={"articletwo"}
          scrollRatio={this.state.scrollRatio}
        >
          <p>
            <strong>Preparaty keratynowe</strong>, używane podczas zabiegu,
            zawierają nie tylko keratynę, lecz także{" "}
            <strong>antyoksydanty, wyciągi z roślin i witaminy</strong> , które
            trwale nawilżają włosy i dostarczają niezbędnych składników
            odżywczych oraz kwasy tłuszczowe, które tworzą na włosach
            niewidoczna barierę ochronna przed szkodliwymi czynnikami
            zewnętrznymi.
          </p>
        </StyledArticle2>
      </StyledMain>
    );
  }
}

export default Main;
