import React, { Component } from "react";
import styled from "styled-components";
import girlOne from "../../assets/images/girl-one.svg";
import girlTwo from "../../assets/images/girl-two.svg";
import girlThree from "../../assets/images/girl-three.svg";
import blob from "../../assets/images/blob.svg";
import blob2 from "../../assets/images/blob2.svg";
import videoHair from "../../assets/images/video-hair.mp4";
import videoHair2 from "../../assets/images/video-hair2.mp4";
import IconSVG from "../../components/IconSVG/IconSVG";
import { Title } from "../../components/Title/Title";
import { Article } from "../../components/Article/Article";

const StyledMain = styled.main`
  position: relative;
  background-color: #c1c9d0;
  overflow: hidden;
  z-index: -3;
  display: flex;
  flex-direction: column;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 40px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  min-height: 380px;
  padding: 150px 5px 0;
  overflow: hidden;
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
  transform: ${({ scrollRatio }) =>
    scrollRatio
      ? `translateY(-${scrollRatio}px) rotate(2deg)`
      : "translateY(0) rotate(2deg)"};
  transition: transform 0.35s linear;
  will-change: transform;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 1;
    margin: 140px 0 30px 20px;
  }
`;
const StyledArticle2 = styled(Article)`
transform: ${({ scrollRatio }) =>
    scrollRatio
      ? `translateY(-${scrollRatio}px) rotate(2deg)`
      : "translateY(0) rotate(2deg)"};
  transition: transform 0.35s linear;
  will-change: transform;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 4;
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  height: 200%;

  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 50%;
    margin: 40px 0 30px 20px;
    order: 3;
  }

  video:nth-child(1) {
    transform: translate(0, -12%);
  }
  video:nth-child(2) {
    transform: translate(0, 12%);
  }
`;

const Video = styled.video`
  width: 40%;
  max-width: 180px;
  height: 10%;
  display: block;
  box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
`;

const StyledTitle = styled(Title)`
  transform: ${({ isVisible }) =>
    isVisible ? "translatey(0)" : "translatey(35%)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: transform 0.35s ease-out, opacity 0.6s ease-out;
  will-change: transform, opacity;
`;

class Main extends Component {
  state = {
    titleIsVisible: false,
    girlOneIsVisible: false,
    girlTwoIsVisible: false,
    girlThreeIsVisible: false,
    videoOneIsVisible: false,
    scrollRatio: "",
    scrollRatioArticle2: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleShowTitle);
    window.addEventListener("scroll", this.handleShowGirlOne);
    window.addEventListener("scroll", this.handleShowGirlTwo);
    window.addEventListener("scroll", this.handleShowGirlThree);
    window.addEventListener("scroll", this.handleShowVideoOne);
    window.addEventListener("scroll", this.handleShowVideoTwo);
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
};

handleShowGirlOne = () => {
     const girlOne = document.querySelector(".girlone");
  
     let topGirlOne = girlOne.getBoundingClientRect().top +10;
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
     let topGirlTwo = girlTwo.getBoundingClientRect().top +10;
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
  let topGirlThree = girlThree.getBoundingClientRect().top +10;
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

handleShowVideoOne = () => {
  const videoOne = document.querySelector(".videoone");
  let topVideoOne = videoOne.getBoundingClientRect().top +10;
  if (topVideoOne <= window.innerHeight) {
      this.setState({
        videoOneIsVisible: true
      });
  } else {
      this.setState({
        videoOneIsVisible: false
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
        <VideoWrapper>
          <Video className={"videoone"} src={videoHair} autoPlay playsinline loop muted />
          <Video src={videoHair2} autoPlay playsinline loop muted />
        </VideoWrapper>
        <StyledArticle2
        className={"articletwo"}
        scrollRatio={this.state.scrollRatio}>
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
