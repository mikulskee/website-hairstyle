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

const StyledMain = styled.main`
  position: relative;
  background-color: #c1c9d0;
  overflow: hidden;
  z-index: -3;
  display: flex;
  flex-direction: column;
  ::after {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    height: 10px;
    width: 100%;
    border-bottom: 10px dotted white;
  }
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
  height: 10vh;
  min-height: 300px;
  padding: 0 5px 0;
  margin-top: 150px;

  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 55%;
    order: 2;
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
    bottom: 0;
    left: 5%;
    z-index: -3;
  }
  div.dotted2 {
    position: absolute;
    width: 12%;
    top: -15%;
    right: 5%;
    z-index: -3;
  }

  .girl-one {
    position: absolute;
    top: 0;
    left: 15px;
    width: 37%;
    z-index: 3;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    visibility: hidden;
  }
  .girl-two {
    position: absolute;
    width: 70%;
    z-index: 2;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
    visibility: hidden;
  }
  .girl-three {
    position: absolute;
    top: 50px;
    right: 15px;
    width: 30%;
    z-index: 3;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);
  }
`;

const StyledArticle = styled(Article)`
  margin-top: 10px;
  border-bottom: 10px double white;
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 40%;
    order: 1;
    margin: 140px 0 30px 20px;
  }
`;

const PicsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 40vh;
  width: 100%;
  overflow: hidden;

  @media only screen and (orientation: landscape) and (min-width: 568px) {
    order: 3;
    height: 50vh;
    width: 100%;
    align-self: center;
    margin-left: 10px;
  }
  @media only screen and (orientation: landscape) and (min-width: 667px) {
    width: 50%;
    height: 70vh;
  }
  div {
    position: relative;
    width: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      display: block;
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
  state = {};

  componentDidMount() {
    const girlOne = document.querySelector(".girl-one");
    const girlTwo = document.querySelector(".girl-two");
    const girlThree = document.querySelector(".girl-three");
    const casual = document.querySelectorAll(".casual");
    const picswrapper = document.querySelector(".picswrapper");

    const tlGirlOne = new TimelineMax({ reversed: true });
    const tlGirlTwo = new TimelineMax({ reversed: true });
    const tlGirlThree = new TimelineMax({ reversed: true });

    const tweenCasual = TweenMax.from(casual, 0.7, {
      scale: 1.4,
      transformOrigin: "center center"
    });

    tlGirlOne.set(girlOne, { visibility: "visible" });
    tlGirlOne.from(girlOne, 1, { opacity: 0, x: -80 });

    tlGirlTwo.set(girlTwo, { visibility: "visible" });
    tlGirlTwo.from(girlTwo, 1, { opacity: 0, y: 80 });

    tlGirlThree.set(girlThree, { visibility: "visible" });
    tlGirlThree.from(girlThree, 1, { opacity: 0, y: -80 });

    window.addEventListener("scroll", () => {
      let topGirlOne = girlOne.getBoundingClientRect().top + 10;
      let topGirlTwo = girlOne.getBoundingClientRect().top + 10;
      let topGirlThree = girlOne.getBoundingClientRect().top + 10;
      let topPicsWrapper = picswrapper.getBoundingClientRect().top + 10;

      topGirlOne <= window.innerHeight ? tlGirlOne.play() : tlGirlOne.reverse();
      topGirlTwo <= window.innerHeight ? tlGirlTwo.play() : tlGirlTwo.reverse();
      topGirlThree <= window.innerHeight
        ? tlGirlThree.play()
        : tlGirlThree.reverse();
      topPicsWrapper <= window.innerHeight
        ? tweenCasual.play()
        : tweenCasual.reverse();
    });
  }

  render() {
    return (
      <StyledMain>
        <Title className={"main"}>
          prostowanie <br /> keratynowe
        </Title>
        <StyledWrapper>
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
        </StyledWrapper>
        <StyledArticle className={"articleone"}>
          <p>
            <strong>Amazon Keratin</strong> to zabieg keratynowy, którego celem
            jest odbudowa struktury włosów, ich intensywne odżywienie i
            wygładzenie. Polega na uzupełnieniu w strukturze włosa niedoboru
            keratyny, będącej naturalnym składnikiem budulcowym włosów.
          </p>
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
